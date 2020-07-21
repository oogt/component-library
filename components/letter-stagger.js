import React from "react";
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

export default () => (
  <motion.h2 variants={container} initial="hidden" animate="show">
    {Array.from(SENTENCE).map((l) => (
      <motion.span variants={item}>{l}</motion.span>
    ))}
  </motion.h2>
);
