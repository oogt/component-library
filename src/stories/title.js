import React from "react";
import { storiesOf } from "@storybook/react";
import { button, color, array, number } from "@storybook/addon-knobs";

import { defaultColor, defaultTextColorDark } from "../config/colors";
import { counter, reRender } from "./index";
import Section from "../components/section";
import Title from "../components/title";

const titleCounts = ["first", "second", "third"];

storiesOf("Titles", module).add("with reveal effect", () => {
  button("Replay title animation", reRender);
  return (
    <div key={counter}>
      {titleCounts.map((titleCount, index) => {
        const isEven = index % 2 === 0;
        return (
          <Section even={isEven} key={titleCount}>
            <Title
              duration={number("Duration (ms)", 500, {
                range: true,
                min: 250,
                max: 5000,
                step: 250
              })}
              delay={number("Delay (ms)", 500, {
                range: true,
                min: 0,
                max: 2000,
                step: 100
              })}
              color={color("Block color", defaultColor)}
              textColor={color("Text color", defaultTextColorDark)}
            >
              {array(`Lines #${index + 1}(comma separated)`, [
                `The ${titleCount}`,
                "content block",
                "with a headline"
              ])}
            </Title>
          </Section>
        );
      })}
    </div>
  );
});
