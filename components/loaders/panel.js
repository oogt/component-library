import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Box, Flex } from "rebass";

const Wrapper = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  .loader {
    position: relative;
    z-index: 3;
    overflow: hidden;

    &--content {
      transform: translateY(100%);
      transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);
    }
  }

  .panel {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    span {
      display: inline-block;
      height: 50%;
      width: 100%;
      background: ${({ panelColor }) => panelColor};
      transform: scaleX(0);
      transform-origin: right center;
      transition: transform 0.45s cubic-bezier(0.4, 0, 0, 1) 0.3s;
    }

    &:nth-child(2) {
      top: 50%;

      span {
        transform-origin: left center;
      }
    }
  }

  &.open {
    .panel {
      span {
        transform: scaleX(1);
        transform-origin: left center;
        transition-delay: 0;
      }

      &:nth-child(2) {
        span {
          transform-origin: right center;
        }
      }
    }

    .loader {
      &--content {
        transition-delay: 0.45s;
        transform: translateY(0%);
      }
    }
  }
`;

const Panel = ({ open, panelColor }) => {
  return (
    <Wrapper
      className={open ? "open" : ""}
      panelColor={panelColor}
      justifyContent="center"
      alignItems="center"
    >
      <div className="panel">
        <span />
      </div>
      <div className="panel">
        <span />
      </div>
      <Box className="loader">
        <Box className="loader--content">Some loader or icon</Box>
      </Box>
    </Wrapper>
  );
};

Panel.propTypes = {
  open: PropTypes.bool.isRequired,
  panelColor: PropTypes.string.isRequired,
};

export default Panel;
