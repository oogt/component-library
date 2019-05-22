import React from "react";
import { Flex } from "@rebass/grid";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

import { defaultBlockColor } from "../config/colors";
import Section from "../components/section";
import Image from "../components/image";

import Cone01 from "../static/images/cones/01.png";
import Cone02 from "../static/images/cones/02.png";
import Cone03 from "../static/images/cones/03.png";
import Cone04 from "../static/images/cones/04.png";
import Cone05 from "../static/images/cones/05.png";

const marginStyle = {
  marginRight: "4em"
};

const LOAD_OFFSET = 500;

storiesOf("Parallax", module).add("with images", () => {
  const ContentBlock = styled.div`
    background: ${defaultBlockColor};
    width: 100%;
    margin-top: 20vh;
    height: 100vh;
  `;

  const StyledFlex = styled(Flex)`
    margin-top: -20vh;
  `;

  const fast = number("Offset outside elements", 100, {
    range: true,
    min: 5,
    max: 250,
    step: 5
  });

  const medium = number("Offset inner elements", 50, {
    range: true,
    min: 5,
    max: 250,
    step: 5
  });

  return (
    <ParallaxProvider>
      <Section even={true} minHeight={1500} column>
        <ContentBlock />
        <StyledFlex alignItems="center" justifyContent="center">
          <Parallax y={[-fast, fast]} styleOuter={marginStyle}>
            <Image src={Cone03} noOverlay offset={LOAD_OFFSET} />
          </Parallax>
          <Parallax y={[-medium, medium]} styleOuter={marginStyle}>
            <Image src={Cone02} noOverlay offset={LOAD_OFFSET} />
          </Parallax>
          <Parallax y={[0, 0]} styleOuter={marginStyle}>
            <Image src={Cone01} noOverlay offset={LOAD_OFFSET} />
          </Parallax>
          <Parallax y={[-medium, medium]} styleOuter={marginStyle}>
            <Image src={Cone04} noOverlay offset={LOAD_OFFSET} />
          </Parallax>
          <Parallax y={[-fast, fast]}>
            <Image src={Cone05} noOverlay offset={LOAD_OFFSET} />
          </Parallax>
        </StyledFlex>
        <ContentBlock />
      </Section>
    </ParallaxProvider>
  );
});
