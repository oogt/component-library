import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  background: ${({ even }) => (even ? "#fbfbfb" : "#fff")};
  padding: 2em;
  height: 50vh;
  min-height: 600px;
  position: relative;
  display: flex;
  align-items: center;
`;

const Section = ({ even, children }) => (
  <Wrapper even={even}>{children}</Wrapper>
);

export default Section;
