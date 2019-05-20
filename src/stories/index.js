import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

import Image from "../components/image";
import Section from "../components/section";

import Image01 from '../static/images/furniture/01.jpg';
import Image02 from '../static/images/furniture/02.jpg';
import Image03 from '../static/images/furniture/03.jpg';

const imagePaths = [Image01, Image02, Image03];


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
