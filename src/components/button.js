import React from "react";
import styled from "styled-components";

import { medium } from "../config/easings";
import { defaultColor, defaultTextColor } from '../config/colors';

const ButtonWrapper = styled.a`
  text-align: center;
  cursor: pointer;
  display: block;
  border: 1px solid ${({ textColor }) => textColor || defaultTextColor};
  color: ${({ textColor }) => textColor || defaultTextColor};
  font-size: 1.2em;
  padding: 2em;
  background: ${({ color }) => color || defaultColor};
  width: 100%;
  z-index: 3;
  position: relative;
  outline: none;
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 480px;
  margin-top: 2em;

  &:before,
  &:after {
    background: ${({ color }) => color || defaultColor};
    border: 1px solid ${({ textColor }) => textColor || defaultTextColor};
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.25s ${medium};
  }

  &:before {
    transform: translate(10px, 10px);
    z-index: 2;
  }

  &:after {
    transform: translate(20px, 20px);
    z-index: 1;
  }

  &:hover {
    &:before,
    &:after {
      transform: translate(0, 0);
    }
  }
`;

const Button = ({ onClick, color, textColor, children }) => (
  <Wrapper color={color} textColor={textColor}>
    <ButtonWrapper color={color} textColor={textColor} onClick={onClick}>
      {children}
    </ButtonWrapper>
  </Wrapper>
);

export default Button;
