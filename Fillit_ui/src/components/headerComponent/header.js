import React from 'react'
import "./header.css"
import SearchIcon from "@mui/icons-material/Search"
import AppIcon from "@mui/icons-material/Apps"
import { IconButton } from '@mui/material'
import Avatar from "@mui/material/Avatar"
import AvatarImg from '../../assets/image/user-Img/AnilProfile.jpeg'
import Img from '../../assets/image/header_img.png'
import Sidebar from '../sidebarComponent/sidebar'


const header = () => {
    return (
        <>
          <div className="header">
            <div className="header_info">
                <Sidebar />
                <img src={Img} id="header_img" alt="failed-to-fetch"/>
                <div className="info">
                  Forms
                </div>
            </div>  
            <div className="header_search">
              <IconButton>
                <SearchIcon/>
              </IconButton>
                <input type="text" name="search" placeholder='search' />
            </div>  
            <div className="header_right">
              <IconButton>
                <AppIcon/>
              </IconButton>
              <IconButton>
                <Avatar src={AvatarImg} alt="failed-to-fetch"/>
              </IconButton>
            </div>  

          </div>
        </>
    )
}

export default header
