import React, { useState } from "react";
import styled from "styled-components";
import LazyLoad from "react-lazy-load";

import { wipe, reveal } from "../config/animations";
import { medium } from "../config/easings";

const DURATION = 1000;

const Wrapper = styled.div`
  position: relative;
  max-width: 480px;
`;

const ImageEl = styled.img`
  max-width: 100%;
  z-index: 1;
  display: block;
`;

const ImageWrapper = styled.div`
  display: inline-block;
  position: relative;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transition: opacity ${medium} ${DURATION}ms;
  animation: ${reveal} ${DURATION * 1.5}ms;
  animation-fill-mode: forwards;
  animation-timing-function: ${medium};
  overflow: hidden;

  :before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: ${({noOverlay}) => noOverlay ? 0 : '100%'};
    height: ${({noOverlay}) => noOverlay ? 0 : '100%'};
    background: ${({ overlayColor }) => overlayColor || "#fff"};
    z-index: 2;

    animation: ${wipe} ${DURATION}ms;
    animation-fill-mode: forwards;
    animation-delay: ${DURATION / 3}ms;
    animation-timing-function: ${medium};
  }
`;

const Image = ({ src, overlayColor, noOverlay, offset, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Wrapper {...props}>
      <LazyLoad offset={offset}>
        <ImageWrapper
          loaded={loaded}
          overlayColor={overlayColor}
          noOverlay={noOverlay}
        >
          <ImageEl src={src} alt={src} onLoad={() => setLoaded(true)} />
        </ImageWrapper>
      </LazyLoad>
    </Wrapper>
  );
};

export default Image;
