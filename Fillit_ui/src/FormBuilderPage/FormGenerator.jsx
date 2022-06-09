import React, { useState } from "react";
import FormData from "./FormData";

const FormGenerator = () => {
  const [thisFormData, setThisFormData] = useState(FormData);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Form Submit ");
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setThisFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
    console.log(thisFormData.title);
  };
  return (
    <>
      <div className='FormGenerator_container'>
        <h3 style={{ margin: "10px", textAlign: "center" }}>Form Generator</h3>
        <div className='FormGenerator_Form'>
          <form onSubmit={handleFormSubmit}>
            <div className='FormGenerator_Form_Title'>
              <input
                type='text'
                name='title'
                id='title'
                value={thisFormData.title}
                required
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <label htmlFor='title'>Title</label>
            </div>
            <div className='FormGenerator_Form_Title'>
              <input
                type='text'
                name='description'
                id='description'
                value={thisFormData.description}
                required
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <label htmlFor='description'>Description</label>
            </div>
            {thisFormData.inputFields.map((Field) => {
              return (
                <div className={Field.styleName}>
                  <label htmlFor={Field.label}>{Field.label}</label>
                  <input
                    type={Field.type}
                    name={Field.label}
                    id={Field.label}
                  />
                </div>
              );
            })}
          </form>
        </div>
      </div>
    </>
  );
};

export default FormGenerator;
