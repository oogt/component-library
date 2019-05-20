import React, { Fragment } from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, text, color } from "@storybook/addon-knobs";

import GlobalStyle from "../components/global-style";
import Button, { defaultColor, defaultTextColor } from "../components/button";
import Image from "../components/image";
import Section from "../components/section";

import Image01 from "../static/images/furniture/01.jpg";
import Image02 from "../static/images/furniture/02.jpg";
import Image03 from "../static/images/furniture/03.jpg";

const imagePaths = [Image01, Image02, Image03];

const AppDecorator = storyFn => (
  <Fragment>
    <GlobalStyle />
    {storyFn()}
  </Fragment>
);

addDecorator(AppDecorator);
addDecorator(withKnobs);

storiesOf("Images", module).add("lazy loaded", () => (
  <div>
    {imagePaths.map((path, index) => {
      const isEven = index % 2 === 0;
      return (
        <Section even={isEven} key={path}>
          <Image src={path} />
        </Section>
      );
    })}
  </div>
));

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
