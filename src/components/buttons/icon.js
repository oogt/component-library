import React from "react";
import styled from "styled-components";
import { Flex } from "@rebass/grid";

import { medium, overshoot } from "../../config/easings";
import { defaultColor, defaultHoverColor } from "../../config/colors";
import Icon from "../icon";

const ICON_SIZE = 64;

const StyledIcon = styled(Icon)`
  z-index: 2;
  position: relative;
  transition: all .5s ${medium};
`

const IconContainer = styled.div`
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  position: relative;
`

const StyledButton = styled.button`
  background: ${({ color }) => color || defaultColor};
  border-radius: 50%;
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
  border: 0;
  position: relative;
  padding: 0;

  &:after {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(0);
    content: "";
    background: ${({ hoverColor }) => hoverColor || defaultHoverColor};
    z-index: 1;
    transition: all .25s ${medium};
  }

  &:hover {
    cursor: pointer;

    :after {
      transition: all .5s ${overshoot};
      transform: translateX(-50%) translateY(-50%) scale(1.2);
    }

    ${StyledIcon}:nth-child(1) {
      opacity: 0;
      transform: translateX(-50%);
    }

    ${StyledIcon}:nth-child(2) {
      opacity: 1;
      transform: translateX(-100%);
    }
  }

  ${StyledIcon}:nth-child(1) {
    opacity: 1;
    transform: translateX(0%);
  }

  ${StyledIcon}:nth-child(2) {
    position: absolute;
    transform: translateX(-50%);
    opacity: 0;
  }
`


const IconButton = ({icon, color, textColor, hoverColor}) => (
  <StyledButton color={color} hoverColor={hoverColor}>
    <Flex alignItems="center" justifyContent="center">
    <IconContainer>
      <StyledIcon icon={icon} color={textColor} />
      <StyledIcon icon={icon} color={color} />
    </IconContainer>
    </Flex>
  </StyledButton>
)

export default IconButton;
