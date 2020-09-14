import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  pointer-events: none;

  div {
    width: ${({ numColumns }) => `${100 / numColumns}%`};
    height: 100%;
    display: inline-block;
    overflow: hidden;

    span {
      display: inline-block;
      height: 100%;
      width: 100%;
      background: ${({ color }) => color};
    }
  }
`;

const curtain = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.01,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const column = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 1,
    x: "-100%",
  },
};

const Curtain = ({ open, numColumns = 4, color }) => {
  const columns = new Array(numColumns).fill();

  return (
    <Wrapper
      initial="hidden"
      animate={open ? "visible" : "hidden"}
      variants={curtain}
      numColumns={columns.length}
      color={color}
    >
      {columns.map(() => (
        <div>
          <motion.span variants={column} />
        </div>
      ))}
    </Wrapper>
  );
};

Curtain.propTypes = {
  open: PropTypes.bool.isRequired,
  numColumns: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default Curtain;
