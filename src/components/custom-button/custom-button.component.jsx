import React from "react";

import "./custom-button.style.scss";

//stateless functional comp
const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button"{...otherProps}>
    {children}
  </button>
);

export default CustomButton;
