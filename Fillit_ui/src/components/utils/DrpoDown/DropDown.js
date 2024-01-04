import React, { useState } from "react";
import "./DropDown.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import FormType1 from "../../FomBuilder/formType1";
export const UserContext = React.createContext();

const DropDown = () => {
  const [isActive, setIsActive] = useState(false);
  const [idx, setIdx] = useState(0);
  const options = [
    {
      type: "Language",
      choice: [{ opt: "React" }, { opt: "NodeJs" }, { opt: "MongoDb" }],
    },
  ];
  const handleClick = (index) => {
    console.log(index, "----", idx);
    setIdx(index);
  };

  return (
    <div className='utils-dropdown'>
      {options.map((dropbox) => {
        return (
          <>
            <div
              className='dropdown-btn'
              onClick={(e) => setIsActive(!isActive)}
            >
              {dropbox.type}{" "}
              <span>
                <ArrowDropDownIcon />
              </span>
            </div>
            {dropbox.choice.map((option, index) => {
              return (
                <>
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
                </>
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export default DropDown;
