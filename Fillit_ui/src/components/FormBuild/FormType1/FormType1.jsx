import React from "react";
import { useState } from "react";
import "./FormType.css";
import {
  Inputfields1,
  Inputfields2,
  Inputfields3,
} from "../InputFields/InputField";
import SaveIcon from "@mui/icons-material/Save";

import { Button, Container } from "@mui/material";
import { useEffect } from "react";

const FormType1 = ({ fieldidx }) => {
  const [idx, setIdx] = useState(fieldidx);
  useEffect(() => {
    setIdx(fieldidx);
  }, [fieldidx]);

  const [inputFields, setInputFields] = useState([{ firstName: "" }]);
  const handleChangeInput = (i, event) => {
    const values = [...inputFields];
    values[i][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inputfield", inputFields);
  };

  const handleAddField = () => {
    setInputFields([...inputFields, { firstName: "" }]);
  };

  const handleRemoveField = (i) => {
    const values = [...inputFields];
    values.splice(i, 1);
    setInputFields(values);
  };

  return (
    <>
      <div className='dynamicForm'>
        <Container>
          <form className='form-build' onSubmit={handleSubmit}>
            {inputFields.map((inputField, i) => {
              return (
                <div key={i}>
                  {idx === 0 && (
                    <Inputfields1
                      value={inputField.firstName}
                      onChange={(event) => handleChangeInput(i, event)}
                    />
                  )}
                  {idx === 1 && (
                    <Inputfields2
                      value={inputField.firstName}
                      onChange={(event) => handleChangeInput(i, event)}
                    />
                  )}
                  {idx === 2 && (
                    <Inputfields3
                      value={inputField.firstName}
                      onChange={(event) => handleChangeInput(i, event)}
                    />
                  )}
                  <button onClick={handleAddField}>Add</button>
                  <button
                    onClick={() => {
                      handleRemoveField(i);
                    }}
                  >
                    remove
                  </button>
                </div>
              );
            })}
          </form>
        </Container>
      </div>
      <Button
        className='save-btn'
        variant='contained'
        color='primary'
        type='submit'
        onClick={handleSubmit}
      >
        <SaveIcon />
        Save
      </Button>
    </>
  );
};

export default FormType1;
