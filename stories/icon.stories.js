import React from "react";
import { storiesOf } from "@storybook/react";
import { text, color } from "@storybook/addon-knobs";

import { defaultTextColorDark } from "../config/colors";
import IconNames from "../config/icons";
import Icon from "../components/icon";

storiesOf("Icons", module).add("default", () => (
  <>
    {IconNames.map(iconName => (
      <Icon
        icon={iconName}
        key={iconName}
        size={text("Font size", "32px")}
        color={color("Icon color", defaultTextColorDark)}
      />
    ))}
  </>
));
