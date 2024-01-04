import React, { useContext, useState } from "react";
import "./formType1.css";
import HeaderForm1 from "../headerComponent/headerForm1";
import DropDown from "../utils/DrpoDown/DropDown";
import SaveIcon from "@mui/icons-material/Save";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// import Form from "../RegistrationForm/form";
import { Button, Container } from "@mui/material";
import Inputfields1 from "../utils/inputFields/inputfields1";
import { UserContext } from "../utils/DrpoDown/DropDown";
import { Link } from "react-router-dom";

const FormType1 = () => {
  const idx = useContext(UserContext);
  console.log(idx);
  const [inputFields, setInputFields] = useState([{ firstName: "" }]);

  const handleChangeInput = (i, event) => {
    const values = [...inputFields];
    values[i][event.target.name] = event.target.value;
    setInputFields(values);
    console.log(inputFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Inputfield", inputFields);
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
      <div className='form-builder'>
        <div className='primary-header'>
          <HeaderForm1 />
        </div>
        <div className='secondary'>
          <div className='slideMenu'>
            <div class='build-wrapper'>
              <input type='checkbox' id='btn' hidden />
              <label for='btn' class='menu-btn'>
                <MenuIcon className='i-menu' />
                <CloseIcon className='i-close' />
              </label>
              <nav id='build-sidebar'>
                <div class='build-title'>Side Menu</div>
                <ul class='build-list-items'>
                  <li>
                    <Link to='#'>
                      <DropDown />
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <DropDown />
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <DropDown />
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <DropDown />
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <DropDown />
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <DropDown />
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <DropDown />
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <DropDown />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className='dynamicForm'>
            <Container>
              <form className='form-build' onSubmit={handleSubmit}>
                {inputFields.map((inputField, i) => {
                  return (
                    <div key={i}>
                      {/* <input name="name" type="text" placeholder="Enter your name"/> */}
                      {/* {console.log(idx)} */}
                      {
                        <Inputfields1
                          value={inputField.firstName}
                          onChange={(event) => handleChangeInput(i, event)}
                        />
                      }
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
        </div>
      </div>
    </>
  );
};

export default FormType1;
