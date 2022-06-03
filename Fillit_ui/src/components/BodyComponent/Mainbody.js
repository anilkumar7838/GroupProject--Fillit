import React from 'react';
import "./Mainbody.css";
import StorageIcon from "@mui/icons-material/Storage";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { IconButton } from '@mui/material';
import contact from "../../assets/image/contactForm.png";

const Mainbody = () => {
    return (
        <div className='mainbody'>
            <div className="mainbody_top">
                <div className="mainbody_top_left" style={{fontSize:"16px",fontWeight:"500"}}>
                    Recent forms
                </div>
                <div className="mainbody_top_right">
                    <div className="mainbody_top_center" style={{fontSize:"14px",marginRight:"125px"}}>
                        Owned by anyone
                        <ArrowDropDown/>
                    </div>
                    <IconButton>
                        <StorageIcon style={{fontSize:"16px",color:"black"}}/>
                    </IconButton>
                    <IconButton>
                        <FolderOpenIcon style={{fontSize:"16px",color:"black"}}/>
                    </IconButton>
                </div>
            </div>
            <div className="mainbody_docs">
                    <div className="doc_card">
                        <img src={contact} alt="Error" className="doc_img" />
                        <div className="doc_card_content">
                            <h4>Untitled Form</h4>

                            <div className="doc_content" style={{fontSize:"12px",color:"grey"}}>
                                <div className='content_left'>
                                <StorageIcon style={{color:"white",fontSize:"16px",backgroundColor:"#6E2594",padding:"3px",marginRight:"3px",borderRadius:"2px"}}/>
                                {/* use state for dynamic update */}
                                Opened in 14Jan
                                </div>
                                <IconButton>
                                <MoreVertIcon style={{fontSize:"18px",color:"grey"}}/>
                                </IconButton>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Mainbody
