/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { boolean, number, color } from "@storybook/addon-knobs";
import { Box } from "rebass";

import { Curtain as CurtainC } from "../components/loaders";

export default {
  title: "Loaders",
};

export const Curtain = () => (
  <>
    <CurtainC
      open={boolean("Open", false)}
      numColumns={number("Number of columns", 4)}
      color={color("Color", "rgb(249, 33, 80)")}
    />
    <Box p={2}>
      <h1>Some content</h1>
      <p>Goes here</p>
    </Box>
  </>
);
