import React, { useState } from "react";
import "./MyFormsCenterPage.css";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import LockIcon from "@mui/icons-material/Lock";
import { IconButton } from "@mui/material";
import { Button } from "@mui/material";

const CardBox = ({ name, lock, responses, date }) => {
  const [dropDownShow, setdropDownShow] = useState(false);
  const [LockState, setLockState] = useState(lock);
  const handleLock = () => {
    return setLockState(!LockState);
  };
  const handleDropDown = () => {
    return setdropDownShow(!dropDownShow);
  };
  const handleClickAway = () => {
    return setdropDownShow(false);
  };

  return (
    <div classNameName='myform_flexrow_btm'>
      <div classNameName='myforms_lower'>
        <div>
          <div>
            <span style={{ fontWeight: "bold" }}>{name}</span>
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
          <div style={{ fontSize: "15px", color: "lightgray" }}>{date}</div>
        </div>
        <div classNameName='myforms_lwr_lft_bottom'>
          <div classNameName='myforms_response_box'>
            <span>Responses: {responses}</span>
          </div>
          <ClickAwayListener onClickAway={handleClickAway}>
            <div classNameName='myforms_dropdown'>
              <IconButton
                onClick={handleDropDown}
                style={{ cursor: "pointer" }}
              >
                <MoreVertIcon />
              </IconButton>

              <div
                classNameName={
                  dropDownShow
                    ? "myforms_lower_rght_dropdown myforms_show"
                    : "myforms_lower_rght_dropdown"
                }
              >
                <div classNameName='myforms_drop_down_content'>
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
          </ClickAwayListener>
        </div>
      </div>
    </div>
  );
};

const MyFormsCenterPage = (props) => {
  console.log(props.data.length);
  console.log(props.data);

  const count = props.data.length;
  return (
    <>
      <div classNameName='myform_container'>
        <div classNameName='myform_flexrow_upr'>
          <div classNameName='myform_upper_left'>
            <h2>My Forms</h2>
            <div style={{ color: "grey" }}>Total Count : {count}</div>
          </div>
          <div classNameName='myforms_upper_right'>
            <IconButton classNameName='myforms_icon_btn'>
              <SearchIcon classNameName='myforms_icon' />
            </IconButton>
            <IconButton classNameName='myforms_icon_btn'>
              <FilterAltOutlinedIcon classNameName='myforms_icon' />
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
          {props.data.map((instant) => {
            return (
              <CardBox
                key={instant.id}
                name={instant.Name}
                date={instant.date}
                responses={instant.responses}
                lock={instant.lock}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyFormsCenterPage;
