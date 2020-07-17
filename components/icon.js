import React from "react";
import styled from "styled-components";

import { defaultTextColorDark } from "../config/colors";

const DEFAULT_SIZE = "32px";

const StyledIcon = styled.i`
  font-size: ${({ size }) => size || DEFAULT_SIZE};
  color: ${({ color }) => color || defaultTextColorDark};
`;

const Icon = ({ icon, className, ...props }) => (
  <StyledIcon
    title={`fa-${icon}`}
    className={`fa fa-${icon} ${className || ""}`}
    {...props}
  />
);

export default Icon;
