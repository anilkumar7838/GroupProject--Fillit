import React from "react";
import { useState } from "react";
import "./TextField.css";
const TextField = (props) => {
  const [textData, setTextData] = useState("");
  return (
    <div className={props.style}>
      <input
        type='text'
        name={props.label}
        id={props.label}
        required
        onChange={(e) => {
          setTextData(e.target.value);
          console.log(textData);
        }}
      />

      <label htmlFor={props.label}>
        <span>{props.label}</span>
      </label>
    </div>
  );
};

export default TextField;
