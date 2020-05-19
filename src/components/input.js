import Identity from "lodash/identity";
import PropTypes from "prop-types";
import React from "react";

export default function Input({ label, name, onChange, type }) {
  return (
    <>
      <label>
        {label}
        <input
          name={name}
          onChange={(e) => onChange(name, e)}
          type={type}
        ></input>
      </label>
    </>
  );
}

Input.defaultProps = {
  label: "Label Name",
  name: "name",
  onChange: Identity,
  type: "text",
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};
