import React from "react";
import "./registrationPage.css";
import TextField from "../InputFieldsComp/TextField";

const RegistrationPage = () => {
  return (
    <>
      <div class='wrapper'>
        <div class='title'>Registration Form</div>
        <div class='form'>
          <TextField label='First Name' style='textInput_css2' />
          <TextField label='First Name' style='textInput_css1' />
          <TextField label='First Name' style='textInput_css3' />
          <div class='inputfield'>
            <label>First Name</label>
            <input type='text' class='input' />
          </div>
          <div class='inputfield'>
            <label>Last Name</label>
            <input type='text' class='input' />
          </div>
          <div class='inputfield'>
            <label>Password</label>
            <input type='password' class='input' />
          </div>
          <div class='inputfield'>
            <label>Confirm Password</label>
            <input type='password' class='input' />
          </div>
          <div class='inputfield'>
            <label>Gender</label>
            <div class='custom_select'>
              <select>
                <option value=''>Select</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>
          </div>
          <div class='inputfield'>
            <label>Email Address</label>
            <input type='text' class='input' />
          </div>
          <div class='inputfield'>
            <label>Phone Number</label>
            <input type='text' class='input' />
          </div>
          <div class='inputfield'>
            <label>Address</label>
            <textarea class='textarea'></textarea>
          </div>
          <div class='inputfield'>
            <label>Postal Code</label>
            <input type='text' class='input' />
          </div>
          <div class='inputfield terms'>
            <label class='check'>
              <input type='checkbox' />
              <span class='checkmark'></span>
            </label>
            <p>Agreed to terms and conditions</p>
          </div>
          <div class='inputfield'>
            <input type='submit' value='Register' class='btn' />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
