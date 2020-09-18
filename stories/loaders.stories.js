/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { boolean, color } from "@storybook/addon-knobs";
import { Box } from "rebass";

import { Panel as PanelC } from "../components/loaders";

export default {
  title: "Loaders",
};

export const Panel = () => (
  <>
    <PanelC
      open={boolean("Open", true)}
      panelColor={color("Color", "rgb(249, 33, 80)")}
    />
    <Box p={2}>
      <h1>Some content</h1>
      <p>Goes here</p>
    </Box>
  </>
);
