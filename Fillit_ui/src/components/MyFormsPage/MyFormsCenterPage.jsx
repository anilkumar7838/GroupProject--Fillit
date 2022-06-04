import React, { useState } from "react";
import "./MyFormsCenterPage.css";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import LockIcon from "@mui/icons-material/Lock";
import { IconButton } from "@mui/material";
import { Button } from "@mui/material";

const CardBox = () => {
  const Responses = 5;
  const [dropDownShow, setdropDownShow] = useState(false);
  const [LockState, setLockState] = useState(true);
  const handleLock = () => {
    return setLockState(!LockState);
  };
  const handleDropDown = () => {
    return setdropDownShow(!dropDownShow);
  };

  return (
    <div className='myform_flexrow_btm'>
      <div className='myforms_lower'>
        <div>
          <div>
            <span style={{ fontWeight: "bold" }}>E-commerce Form</span>
            <span style={{ float: "right" }}>
              <IconButton onClick={handleLock}>
                {LockState ? (
                  <LockIcon fontSize='small' />
                ) : (
                  <LockOpenIcon fontSize='medium' />
                )}
              </IconButton>
            </span>
          </div>
          <div style={{ fontSize: "15px", color: "lightgray" }}>22/05/22</div>
        </div>
        <div className='myforms_lwr_lft_bottom'>
          <div className='myforms_response_box'>
            <span>Responses: {Responses}</span>
          </div>
          <div className='myforms_dropdown'>
            <IconButton onClick={handleDropDown} style={{ cursor: "pointer" }}>
              <MoreVertIcon />
            </IconButton>

            <div
              className={
                dropDownShow
                  ? "myforms_lower_rght_dropdown myforms_show"
                  : "myforms_lower_rght_dropdown"
              }
            >
              <div className='myforms_drop_down_content'>
                <>
                  <IconButton
                    style={{
                      justifyContent: "flex-start",
                      fontSize: "20px",
                    }}
                  >
                    <EditIcon fontSize='small' />{" "}
                    <span style={{ marginLeft: "10px", fontSize: "10px" }}>
                      Edit
                    </span>
                  </IconButton>
                </>
                <>
                  <IconButton
                    style={{
                      justifyContent: "flex-start",
                      fontSize: "20px",
                    }}
                  >
                    <ShareIcon fontSize='small' />{" "}
                    <span style={{ marginLeft: "10px", fontSize: "10px" }}>
                      Share
                    </span>
                  </IconButton>
                </>
                <>
                  <IconButton
                    style={{
                      justifyContent: "flex-start",
                      fontSize: "20px",
                    }}
                  >
                    <DeleteIcon fontSize='small' />{" "}
                    <span style={{ marginLeft: "10px", fontSize: "10px" }}>
                      Delete
                    </span>
                  </IconButton>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyFormsCenterPage = () => {
  const count = 4;
  return (
    <>
      <div className='myform_container'>
        <div className='myform_flexrow_upr'>
          <div className='myform_upper_left'>
            <h2>My Forms</h2>
            <div style={{ color: "grey" }}>Total Count : {count}</div>
          </div>
          <div className='myforms_upper_right'>
            <IconButton className='myforms_icon_btn'>
              <SearchIcon className='myforms_icon' />
            </IconButton>
            <IconButton className='myforms_icon_btn'>
              <FilterAltOutlinedIcon className='myforms_icon' />
            </IconButton>
          </div>
          <div>
            <Button
              sx={{
                color: "white",
                bgcolor: "red",
              }}
              color='error'
              variant='contained'
            >
              + Create Form
            </Button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
          }}
        >
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
        </div>
      </div>
    </>
  );
};

export default MyFormsCenterPage;
