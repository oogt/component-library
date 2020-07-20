import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Box } from "@rebass/grid";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const Wrapper = styled(Box)`
  background: #000;
  min-height: 240vh;

  svg {
    cursor: pointer;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  .cls-1 {
    fill: none;
    stroke: #fff;
    stroke-miterlimit: 10;
    stroke-width: 1px;
  }

  .dark-grey,
  .black {
    height: 80vh;
  }

  .dark-grey {
    background: #161616;
  }
`;

const starVariants = {
  clicked: {
    pathLength: 1,
  },
  unclicked: {
    pathLength: 0.01,
  },
  hover: (isClicked) => ({
    pathLength: isClicked ? 0.99 : 0.02,
    transition: {
      duration: 0.25,
    },
  }),
  pressed: {
    scale: 0.95,
  },
};

const fillVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  return (
    <Wrapper>
      <Box className="dark-grey" />
      <Box className="black" />
      <Box className="dark-grey" />
      <motion.svg
        width="440"
        height="440"
        viewBox="0 0 334.56 334.56"
        animate={isClicked ? "clicked" : "unclicked"}
        onClick={() => setIsClicked(!isClicked)}
        whileHover="hover"
        whileTap="pressed"
      >
        <motion.path
          className="cls-1"
          d="M169.2,3.63h-3.83c0,89.19-72.55,161.74-161.74,161.74v3.83c89.19,0,161.74,72.55,161.74,161.73h3.83A162,162,0,0,1,330.93,169.2v-3.83A161.39,161.39,0,0,1,210.08,111,161,161,0,0,1,169.2,3.63"
          style={{ pathLength }}
          variants={starVariants}
          custom={isClicked}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M169.2,3.63h-3.83c0,89.19-72.55,161.74-161.74,161.74v3.83c89.19,0,161.74,72.55,161.74,161.73h3.83A162,162,0,0,1,330.93,169.2v-3.83A161.39,161.39,0,0,1,210.08,111,161,161,0,0,1,169.2,3.63"
          style={{ fill: "#fff" }}
          animate={isComplete ? "visible" : "hidden"}
          initial="hidden"
          variants={fillVariants}
        />
      </motion.svg>
    </Wrapper>
  );
};
