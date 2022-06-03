import React from 'react';
import "./template.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {IconButton} from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

import blank from "../../assets/image/blankPage.png";
import contact from "../../assets/image/contactForm.png";
import party from "../../assets/image/partyInvite.png";
import eventR from "../../assets/image/eventRegistration.png";

const template = () => {
    return (
        <div className='template_section'>
            <div className="template_top">
                <div className="template_left">
                    <span style={{fontSize:"16px",color:"#202124"}}>Start New Form</span>
                </div>
                <div className="template_right">
                    <div className="gallery_button">
                        Template gallery
                        <UnfoldMoreIcon fontSize='small'/>
                    </div>
                    <IconButton>
                        <MoreVertIcon fontSize='small'/>
                    </IconButton>
                </div>
            </div>
            <div className="template_body">
                <div className="card">
                    <img src={blank} alt="Error Loading" className='card_img' />
                    <p className='card_title'>Blank</p>
                </div>
                <div className="card">
                    <img src={party} alt="Error Loading" className='card_img'/>
                    <p className='card_title'>Party Invite</p>
                </div>
                <div className="card">
                    <img src={contact} alt="Error Loading" className='card_img'/>
                    <p className='card_title'>Contact Information</p>
                </div>
                <div className="card">
                    <img src={eventR} alt="Error Loading" className='card_img'/>
                    <p className='card_title'>Event Registration</p>
                </div>
            </div>
            
        </div>
    )
}

export default template
