import React from "react";
import { storiesOf} from "@storybook/react";
import { text, color } from "@storybook/addon-knobs";

import {
  defaultColor,
  defaultTextColor,
} from "../config/colors";
import Section from "../components/section";
import Button from "../components/button";

storiesOf("Buttons", module).add("default", () => (
  <Section even={true}>
    <Button
      color={color("Button color", defaultColor)}
      textColor={color("Text color", defaultTextColor)}
    >
      {text("Button text", "Hover me now")}
    </Button>
  </Section>
));
