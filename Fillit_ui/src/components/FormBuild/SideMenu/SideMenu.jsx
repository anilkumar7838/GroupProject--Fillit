import React from "react";
import "../FormType1/FormType.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DropDown from "../dropDown/dropDown";
const SideMenu = ({ setFieldIdx }) => {
  return (
    <>
      <div className='slideMenu'>
        <div className='build-wrapper'>
          <input type='checkbox' id='btn' hidden />
          <label htmlFor='btn' className='menu-btn'>
            <MenuIcon className='i-menu' />
            <CloseIcon className='i-close' />
          </label>
          <nav id='build-sidebar'>
            <div className='build-title'>Side Menu</div>
            <ul className='build-list-items'>
              <li>
                <i className='fas fa-home'></i>
                <DropDown setFieldIdx={setFieldIdx} />
              </li>
              <li>
                <i className='fas fa-sliders-h'></i>
                <DropDown />
              </li>
              <li>
                <i className='fas fa-address-book'></i>
                <DropDown />
              </li>
              <li>
                <i className='fas fa-cog'></i>
                <DropDown />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
