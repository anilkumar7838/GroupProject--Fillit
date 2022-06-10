import React from "react";
import { useState } from "react";
import "./TextField.css";
const TextField = (props) => {
  const [textData, setTextData] = useState("");
  return (
    <div className='textInput_css1'>
      <input
        type='text'
        name={props.label}
        id={props.label}
        onChange={(e) => {
          setTextData(e.target.value);
          console.log(textData);
        }}
      />
      <label htmlFor={props.label}>{props.label}</label>
    </div>
  );
};

export default TextField;
