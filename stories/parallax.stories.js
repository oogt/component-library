import React from "react";
import { Flex } from "@rebass/grid";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

import { defaultBlockColor } from "../config/colors";
import { medium } from "../config/easings";
import Section from "../components/section";
import Image from "../components/image";

const LOAD_OFFSET = 500;
const TRANSITION_SPEED = 500;

const StyledParallax = styled(Parallax)`
  .parallax-outer {
    margin-right: 4em;

    &:last-child {
      margin-right: 0;
    }
  }

  .parallax-inner {
    transition: all
      ${({ transitionSpeed }) => transitionSpeed || TRANSITION_SPEED}ms
      ${medium};
  }
`;

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
    step: 5,
  });

  const medium = number("Offset inner elements", 50, {
    range: true,
    min: 5,
    max: 250,
    step: 5,
  });

  const transitionSpeed = number("Speed debounce (ms)", 500, {
    range: true,
    min: 100,
    max: 2000,
    step: 100,
  });

  return (
    <ParallaxProvider>
      <Section even={true} minHeight={1500} column>
        <ContentBlock />
        <StyledFlex alignItems="center" justifyContent="center">
          <StyledParallax y={[-fast, fast]} transitionSpeed={transitionSpeed}>
            <Image src="/images/cones/03.png" noOverlay offset={LOAD_OFFSET} />
          </StyledParallax>
          <StyledParallax
            y={[-medium, medium]}
            transitionSpeed={transitionSpeed}
          >
            <Image src="/images/cones/02.png" noOverlay offset={LOAD_OFFSET} />
          </StyledParallax>
          <StyledParallax y={[0, 0]} transitionSpeed={transitionSpeed}>
            <Image src="/images/cones/01.png" noOverlay offset={LOAD_OFFSET} />
          </StyledParallax>
          <StyledParallax
            y={[-medium, medium]}
            transitionSpeed={transitionSpeed}
          >
            <Image src="/images/cones/04.png" noOverlay offset={LOAD_OFFSET} />
          </StyledParallax>
          <StyledParallax y={[-fast, fast]} transitionSpeed={transitionSpeed}>
            <Image src="/images/cones/05.png" noOverlay offset={LOAD_OFFSET} />
          </StyledParallax>
        </StyledFlex>
        <ContentBlock />
      </Section>
    </ParallaxProvider>
  );
});
