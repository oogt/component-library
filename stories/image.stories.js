import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import Section from "../components/section";
import Image from "../components/image";

const imagePaths = [
  "/images/furniture/01.jpg",
  "/images/furniture/02.jpg",
  "/images/furniture/03.jpg",
];

storiesOf("Images", module).add("lazy loaded", () => {
  const StyledImage = styled(Image)`
    > div > div {
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
    }
  `;

  return (
    <div>
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
