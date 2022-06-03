import React from "react";
import "./sidebar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import Img1 from "../../assets/image/google-sheet.png";
import Img2 from "../../assets/image/google-slides.png";
import Img3 from "../../assets/image/Google_Docs.png";
import Img4 from "../../assets/image/Google_Forms.png";
import Img5 from "../../assets/image/google-drive.png";

import{FiSettings} from "react-icons/fi"
import {BsQuestionCircle} from "react-icons/bs"

const Sidebar = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const togglesidebar = (side, open) => (event) => {
    setState({ ...state, [side]: open });
  };

//   const list = (item) => {
//     <div style={{ width: "250px" }} role="presentation">
//       <Divider/>
//         <List style={{width:"250px"}}>
//           <ListItem>
//                 <ListItemText style={{fontSize:"48px",marginLeft:"20px"}}>
//                     <span className="list_style" style={{fontWeight:"700"}}>F</span>
//                     <span className="list_style">i</span>
//                     <span className="list_style" >l</span>
//                     <span className="list_style" >l</span>
//                     {/* <span className="list_style"></span> */}
//                     <span className="list_style" style={{fontWeight:"700"}}>I</span>
//                     <span className="list_style" style={{marginRight:"10px"}}>t</span>
                    
//                    //<span className="list_style_form" style={{marginLeft:"20px"}}>Forms</span>

//                 </ListItemText>
//           </ListItem>
//         </List>

//         <Divider/>

//         <List style={{marginLeft:"8px",marginRight:"8px",marginTop:"15px"}}>
//             <ListItem className="list_item">
//                 <img src={Img1} alt="not found" style={{height:"25px"}} />
//                 <div className="img_style">Sheets</div>
//             </ListItem>
//             <ListItem className="list_item">
//                 <img src={Img2} alt="not found" style={{height:"27px"}} />
//                 <div className="img_style">Docs</div>
//             </ListItem>
//             <ListItem className="list_item">
//                 <img src={Img3} alt="not found" style={{height:"22px"}} />
//                 <div className="img_style">Slides</div>
//             </ListItem>
//             <ListItem className="list_item">
//                 <img src={Img4} alt="not found" style={{height:"22px"}} />
//                 <div className="img_style">Forms</div>
//             </ListItem>
            
//         </List>
//         <Divider/>
//         <List style={{marginLeft:"8px",marginRight:"8px",marginTop:"15px"}}>
//             <ListItem className="list_item">
//                 <FiSettings/>
//                 <div style={{marginLeft:"20px",fontSize:"14px"}}>Settings</div>
//             </ListItem>
//             <ListItem className="list_item">
//                 <BsQuestionCircle/>
//                 <div style={{marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"grey"}}>Help & FeedBack</div>
//             </ListItem>
//         </List>

//         <Divider/>
//         <List style={{marginLeft:"8px",marginRight:"8px",marginTop:"15px"}}>
//             <ListItem className="list_item">
//                 <img src={Img5} alt="not found" style={{height:"20px"}} />
//                 <div style={{marginLeft:"20px",fontSize:"14px"}}>Drive</div>
//             </ListItem>
//         </List>
//         <Divider/>
//     </div>;
//   };

  return (
    <>
      {/* <React.Fragement> */}
      <IconButton onClick={togglesidebar("left", true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        open={state["left"]}
        onClose={togglesidebar("left", false)}
        side={"left"}
      >

        {/* uncomment after removing error */}
        {/* {list('left')}; */}


        {/* -------------- Try to  resolve error in above function() names list and remove the below part which is same as mentioned already in function */}

        {/* remove start */}
        <Divider/>
        <List style={{width:"250px"}}>
          <ListItem>
                <ListItemText style={{fontSize:"48px",marginLeft:"20px"}}>
                    <span className="list_style" style={{fontWeight:"700"}}>F</span>
                    <span className="list_style">i</span>
                    <span className="list_style" >l</span>
                    <span className="list_style" >l</span>
                    {/* <span className="list_style"></span> */}
                    <span className="list_style" style={{fontWeight:"700"}}>I</span>
                    <span className="list_style" style={{marginRight:"10px"}}>t</span>
                    
                    {/* <span className="list_style_form" style={{marginLeft:"20px"}}>Forms</span> */}

                </ListItemText>
          </ListItem>
        </List>

        <Divider/>

        <List style={{marginLeft:"8px",marginRight:"8px",marginTop:"15px"}}>
            <ListItem className="list_item">
                <img src={Img1} alt="not found" style={{height:"25px"}} />
                <div className="img_style">Sheets</div>
            </ListItem>
            <ListItem className="list_item">
                <img src={Img2} alt="not found" style={{height:"27px"}} />
                <div className="img_style">Docs</div>
            </ListItem>
            <ListItem className="list_item">
                <img src={Img3} alt="not found" style={{height:"22px"}} />
                <div className="img_style">Slides</div>
            </ListItem>
            <ListItem className="list_item">
                <img src={Img4} alt="not found" style={{height:"22px"}} />
                <div className="img_style">Forms</div>
            </ListItem>
            
        </List>
        <Divider/>
        <List style={{marginLeft:"8px",marginRight:"8px",marginTop:"15px"}}>
            <ListItem className="list_item">
                <FiSettings/>
                <div style={{marginLeft:"20px",fontSize:"14px"}}>Settings</div>
            </ListItem>
            <ListItem className="list_item">
                <BsQuestionCircle/>
                <div style={{marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"grey"}}>Help & FeedBack</div>
            </ListItem>
        </List>

        <Divider/>
        <List style={{marginLeft:"8px",marginRight:"8px",marginTop:"15px"}}>
            <ListItem className="list_item">
                <img src={Img5} alt="not found" style={{height:"20px"}} />
                <div style={{marginLeft:"20px",fontSize:"14px"}}>Drive</div>
            </ListItem>
        </List>
        <Divider/>


      {/* remove end */}
        


      </Drawer>
      {/* </React.Fragement> */}
    </>
  );
};

export default Sidebar;
