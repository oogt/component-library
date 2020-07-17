import React from "react";
import Stacked from "./buttons/stacked";
import Icon from "./buttons/icon";

const Button = ({ type, ...props }) => {
  switch (type) {
    case "stacked":
      return <Stacked {...props} />;
    case "icon":
      return <Icon {...props} />;
    default:
      throw new Error(`Unknown button type: ${type}`);
  }
};

export default Button;
