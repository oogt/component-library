import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

import Image from "../components/image";
import Section from "../components/section";

const imagePaths = ["01.jpg", "02.jpg", "03.jpg"];


storiesOf("Images", module).add("lazy loaded", () => (
  <div>
    {imagePaths.map((path, index) => {
      const isEven = index % 2 === 0;
      return (
        <Section even={isEven} key={path}>
          <Image src={`/images/furniture/${path}`} />
        </Section>
      );
    })}
  </div>
));
