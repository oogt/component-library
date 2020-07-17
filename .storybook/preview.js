import React, { Fragment } from "react";
import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import GlobalStyle from "../components/global-style";

const AppDecorator = (storyFn) => (
  <Fragment>
    <GlobalStyle />
    {storyFn()}
  </Fragment>
);

addDecorator(AppDecorator);
addDecorator(withKnobs);

/*
  Global variable that can be used as a key for a story. Needed to be able to
  re-trigger animations from a button-knob
*/
export let counter = 0;
export const reRender = () => (counter += 1);
