import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  background: ${({ even }) => (even ? "#fbfbfb" : "#fff")};
  padding: 2em;
  height: auto;
  min-height: ${({ minHeight }) => minHeight || 600}px;
  position: relative;
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  align-items: center;
`;

const Section = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);

export default Section;
