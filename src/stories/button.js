import React from "react";
import { storiesOf } from "@storybook/react";
import { text, color } from "@storybook/addon-knobs";

import {
  defaultColor,
  defaultTextColor,
  defaultHoverColor
} from "../config/colors";
import Section from "../components/section";
import Button from "../components/button";

storiesOf("Buttons", module)
  .add("as stacked cards", () => (
    <Section even={true}>
      <Button
        type="stacked"
        color={color("Button color", defaultColor)}
        textColor={color("Text color", defaultTextColor)}
      >
        {text("Button text", "Hover me now")}
      </Button>
    </Section>
  ))
  .add("as an icon", () => (
    <Section even={true}>
      <Button
        type="icon"
        icon="arrow-right"
        color={color("Button color", defaultColor)}
        hoverColor={color("Hover color", defaultHoverColor)}
        textColor={color("Text color", defaultTextColor)}
      />
    </Section>
  ));
