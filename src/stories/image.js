import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { button } from "@storybook/addon-knobs";

import { counter, reRender } from "./index";
import Section from "../components/section";
import Image from "../components/image";
import Image01 from "../static/images/furniture/01.jpg";
import Image02 from "../static/images/furniture/02.jpg";
import Image03 from "../static/images/furniture/03.jpg";

const imagePaths = [Image01, Image02, Image03];

storiesOf("Images", module).add("lazy loaded", () => {
  const StyledImage = styled(Image)`
    > div > div {
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
    }
  `

  button("Replay image animation", reRender);
  return (
    <div key={counter}>
      {imagePaths.map((path, index) => {
        const isEven = index % 2 === 0;
        return (
          <Section even={isEven} key={path}>
            <StyledImage src={path} />
          </Section>
        );
      })}
    </div>
  );
});
