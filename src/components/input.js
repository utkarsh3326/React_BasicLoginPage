import React from "react";

export default function Input(props) {
  return (
    <>
      <label>
        {props.label}
        <input
          type={props.type}
          name={props.name}
          value={props.value[props.name]}
          onChange={(e) => props.onChange(props.name, e)}
        ></input>
      </label>
      <br></br>
    </>
  );
}
