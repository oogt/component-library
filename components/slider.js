import React from "react";
import styled from "styled-components";
import Flickity from "react-flickity-component";

const Slider = styled.div`
  * {
    outline: none;
  }

  button,
  ol {
    display: none;
  }

  .slide {
    width: 80vw;
    margin-right: 5vw;
    padding-left: 1.25vw;
    margin-left: 1.25vw;
    cursor: grab;
    opacity: 0.2;
    transform: scale(1);
    transition: transform 0.45s ease, opacity 0.45s;

    &.is-selected {
      opacity: 1;
    }

    img {
      max-width: 100%;
    }
  }

  .flickity {
    &-viewport {
      overflow: hidden;

      &.is-pointer-down {
        .slide {
          transform: scale(0.9);
        }
      }
    }
  }
`;

const options = {
  wrapAround: true,
  cellAlign: "left",
};

export default () => (
  <Slider>
    <Flickity options={options} static>
      <div className="slide">
        <img src="/images/cars/1.jpg" alt="Car 1" />
      </div>
      <div className="slide">
        <img src="/images/cars/2.jpg" alt="Car 2" />
      </div>
      <div className="slide">
        <img src="/images/cars/3.jpg" alt="Car 3" />
      </div>
    </Flickity>
  </Slider>
);
