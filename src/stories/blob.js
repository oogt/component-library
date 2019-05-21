import React from "react";
import { storiesOf } from "@storybook/react";
import { color, number } from "@storybook/addon-knobs";

import { defaultColor } from "../config/colors";
import Section from "../components/section";
import Blob from "../components/blob";

storiesOf("Blob", module).add("default", () => (
  <Section even={true}>
    <Blob
      color={color("Blob color", defaultColor)}
      liquidity={number("Liquidity", 20, {
        range: true,
        min: 0,
        max: 50,
        step: 2
      })}
      size={number("Size", 150, {
        range: true,
        min: 1,
        max: 350,
        step: 5
      })}
    />
  </Section>
));
