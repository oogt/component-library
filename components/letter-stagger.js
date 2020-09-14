import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.015,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const SENTENCE =
  "Animate these letters in a staggering manner, because that's how the cool kids do these days";

const Div = styled.div`
  ${({ rotated }) =>
    rotated &&
    css`
      writing-mode: vertical-rl;
      transform: rotate(180deg);
    `}
`;

const LetterStagger = ({ rotated }) => (
  <Div rotated={rotated}>
    <motion.h2 variants={container} initial="hidden" animate="show">
      {Array.from(SENTENCE).map((l) => (
        <motion.span variants={item}>{l}</motion.span>
      ))}
    </motion.h2>
  </Div>
);

LetterStagger.propTypes = {
  rotated: PropTypes.bool,
};

LetterStagger.defaultProps = {
  rotated: false,
};

export default LetterStagger;
