import Identity from "lodash/identity";
import PropTypes from "prop-types";
import React from "react";

export default function Button({ btnName, onClick }) {
  return (
    <>
      <button onClick={onClick}>{btnName}</button>
    </>
  );
}

Button.defaultProps = {
  btnName: "Button",
  onClick: Identity,
};

Button.propTypes = {
  btnName: PropTypes.string,
  onClick: PropTypes.func,
};
