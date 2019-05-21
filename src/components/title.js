import React from "react";
import styled from "styled-components";
import LazyLoad from "react-lazy-load";

import { move, fadeIn } from "../config/animations";
import { medium } from "../config/easings";
import { defaultColor, defaultTextColor } from "../config/colors";

const DURATION = 500;

const Wrapper = styled.div`
  margin-top: 0.6em;

  &:first-child {
    margin-top: 0;
  }
`;

const LineWrapper = styled.span`
  display: inline-block;
  position: relative;
`;

const Overlay = styled.div`
  background: ${({ color }) => color || defaultColor};
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  transition: all ${({ duration }) => duration}ms ${medium};
  animation-name: ${move};
  animation-delay: ${({delay}) => delay}ms;
  animation-duration: ${({ duration }) => duration * 2}ms;
  animation-fill-mode: both;
  transform: scaleX(0);
  transform-origin: left;
`;

const H1 = styled.h1`
  margin: 0;
  opacity: 0;
  animation-name: ${fadeIn};
  animation-delay: ${({ duration, delay }) => duration + delay}ms;
  animation-duration: ${({ duration }) => duration / 2}ms;
  animation-fill-mode: both;
  color: ${({ textColor }) => textColor || defaultTextColor};
  font-size: 4em;
`;

const Title = ({ duration, color, textColor, children, delay }) => (
  <LazyLoad>
    <div>
      {children.map((line, index) => {
        const actualDuration = duration === undefined ? DURATION : duration;
        const actualDelay = (delay === undefined ? DURATION : delay) * index ;
        return (
          <Wrapper key={index}>
            <LineWrapper>
              <H1 textColor={textColor} duration={actualDuration} delay={actualDelay}>
                {line}
              </H1>
              <Overlay color={color} duration={actualDuration} delay={actualDelay} />
            </LineWrapper>
          </Wrapper>
        );
      })}
    </div>
  </LazyLoad>
);

export default Title;
