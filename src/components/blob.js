import React from "react";
import styled from "styled-components";
import { useTrail, animated } from "react-spring";

import { defaultColor } from "../config/colors";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const Svg = styled.svg`
  position: absolute;
  width: 0;
  height: 0;
  display: none;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const MouseCapture = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  filter: url("#goo");
  overflow: hidden;

  > div {
    position: absolute;
    will-change: transform;
    border-radius: 50%;
    background: ${({ color }) => color || defaultColor};
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    opacity: 0.6;
  }

  > div::after {
    content: "";
    position: absolute;
    top: 20px;
    left: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
  }

  > div:nth-child(1) {
    width: ${({size}) => size}px;
    height: ${({size}) => size}px;
  }

  > div:nth-child(2) {
    width: ${({size}) => size / 1.25}px;
    height: ${({size}) => size / 1.25}px;

    :after {
      top: ${({size}) => size / 4}px;
      left: ${({size}) => size / 4}px;
      width: ${({size}) => size / 4}px;
      height: ${({size}) => size / 4}px;
    }
  }

  > div:nth-child(3) {
    width: ${({size}) => size / 3}px;
    height: ${({size}) => size / 3}px;

    :after {
      top: ${({size}) => size / 6}px;
      left: ${({size}) => size / 6}px;
      width: ${({size}) => size / 6}px;
      height: ${({size}) => size / 6}px;
    }
  }
`;

const Blob = ({ color, liquidity, size }) => {
  const actualSize = size === undefined ? 150 : size;
  const [trail, set] = useTrail(3, () => ({
    xy: [0, 0],
    config: i => (i === 0 ? fast : slow)
  }));
  return (
    <Wrapper>
      <Svg>
        <filter id="goo">
          <feGaussianBlur
            in="SourceGraphic"
            result="blur"
            stdDeviation={liquidity === undefined ? 20 : liquidity}
          />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </Svg>
      <MouseCapture
        color={color}
        onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}
        size={actualSize}
      >
        {trail.map((props, index) => (
          <animated.div
            key={index}
            style={{ transform: props.xy.interpolate(trans) }}
          />
        ))}
      </MouseCapture>
    </Wrapper>
  );
};

export default Blob;
