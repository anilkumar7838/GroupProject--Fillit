import React, { useState } from "react";
import "./dropDown.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import FormType1 from "../../FomBuilder/formType1";

const DropDown = ({ setFieldIdx }) => {
  const [isActive, setIsActive] = useState(false);
  const [idx, setIdx] = useState(0);
  const options = [
    {
      type: "Language",
      choice: [{ opt: "React" }, { opt: "NodeJs" }, { opt: "MongoDb" }],
    },
  ];
  const handleClick = (index) => {
    console.log(index);
    setIdx(index);
    setFieldIdx(idx);
  };

  return (
    <div className='utils-dropdown'>
      {options.map((dropbox, index) => {
        return (
          <div key={index}>
            <div
              className='dropdown-btn'
              onClick={(e) => setIsActive(!isActive)}
            >
              {dropbox.type}
              <span>
                <ArrowDropDownIcon />
              </span>
            </div>
            {dropbox.choice.map((option, index) => {
              return (
                <div key={index}>
                  {isActive && (
                    <div className='dropdown-content'>
                      <div
                        className='dropdown-item'
                        onClick={() => {
                          handleClick(index);
                        }}
                      >
                        {option.opt}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default DropDown;
