import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Divider } from '@mui/material';
import Search from '@mui/icons-material/Search';
import Records from './records.json'
import './template_main.css'
import { Link } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import Moretemplates from './more_templates.json'





function Template_main() {


  const [show, setShow] = React.useState(false);

  const style={
    transform:show?'rotate(180deg)':'',
    transition:'150ms ease',
  }

  return (
    <>
      <div className='template_header'>
        <div className='template_header_left'>
          <h2>Fill-IT</h2>
        </div>
        {/* <div className='template_header_middle'>
          <span>
            Templates
          </span>

          <span>
            Features
          </span>
          <KeyboardArrowDownIcon />

          <span>
            Use Cases
          </span>
          <KeyboardArrowDownIcon />

          <span>
            Integration
          </span>

          <span>
            Pricing
          </span>

        </div> */}

        <div className='template_header_right'>
          <button className='button1'>
            Login
          </button>
          <button className='button2'>
            Register
          </button>
        </div>
      </div>
      <Divider />

      <div className='template_header_bottom'>

        <a href="https://blank.page/">
          <span>
            FillIT
          </span>
        </a>
        <a href="https://blank.page/ " className='template_header_bottom_icon'>
          <ArrowForwardIosIcon />
        </a>
        <span>
          Templates

        </span>

      </div>

      <br />

      <div className='template_form_body'>

        {/* <div className='template_body_header'>
          <div className='template_body_header_comp'>
            Type
          </div>
          <div className='template_body_header_comp'>
            <ArrowDropDownIcon className='arrowicon' />
            Industries
          </div>
          <div className='template_body_header_comp'>
            <ArrowDropDownIcon className='arrowicon' />
            Color
          </div>

          <div className='template_body_header_comp' >
            <ArrowDropDownIcon className='arrowicon' />
            Search for theme by tag
          </div>

          <Search className='arrowicon' />
        </div> */}

        <Divider />

        <div className='template_body_heading'>
          {/* <Divider style={{ color: '#e1e8ef', width: '100%', margin: '20px' }} /> */}
          Choose a type of form to see more templates , or create from scratch
        </div>

        <div className='template_body_main'>
          {
            Records && Records.map(record => {
              return (
                <div className='cards'>
                  <div className='card_image_container' >
                    <div classname='card_image'>
                      <img src={record.image} alt="" />
                    </div>
                  </div>
                  <div className='card_name'>
                    {record.content}
                  </div>
                  <div className='card_number'>
                    {record.number}
                  </div >
                </div>
              )
            })

          }
        </div>
        <div className='add_more_template' onClick={() => setShow(!show)}  >
          See More Templates
          <KeyboardArrowDownIcon  style={style}/>

        </div>
        <div  className='more_templates'>
          {/* { */}
          {
            show ?
              Moretemplates.map(rec => {
                return (
                  <div className='opened_card'>
                    <div className='opened_photo' >
                      <img src={rec.photo} alt="img" style={{ height: "250px", width: "450px" }} />
                    </div>
                    <div className='more_card_hover_content'>
                      <button className='more_template_btn1' >
                        Use template
                      </button >
                      <button className='more_template_btn2'  >
                        preview
                      </button>

                    </div>
                    <div className='opened_card_text'>
                      {rec.title}
                    </div>
                    <div className='card_footer'>
                      <FileDownloadIcon />
                      {rec.downloads}
                    </div>

                  </div>
                )
              })
              : null
          }
          {/* } */}

        </div>

      </div>

      <div className='template_footer'>

      </div>

    </>
  )
}

export default Template_main

























// import React from 'react'
// import './template_main.css'
// import './card.jsx'
// import Records from './records.json'
// import { Divider } from '@mui/material'
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
// function Template() {
//   return (
//     <div className='page'>

//       <div className='template_header'>
//         <img className='header_img' src='https://forms.app/static/img/logo-mobile.svg' />
//         <button className='button'>
//           Login
//         </button>

//       </div>
//       <div className='template_body'>
//         <div className='heading'>
//           <h3>
//             Select form Template
//           </h3>

//         </div>

//         <div className='card_container'>
//           {
//             Records && Records.map(record => {
//               return (
//                 <div className='card' key={record.id}>
//                   <img src={record.image} alt="mona lisa" />
//                   {/* <div className="card_bottom"> */}
//                   <p >
//                       <Divider />
//                     <div className='card_bottom'>
//                       {console.log(record.arrow)}
//                       {record.content}
//                       {
//                         record.arrow ?  (<ArrowForwardIosIcon  className='arronw_symbol'/>) : null
//                       }

//                     </div>

//                   </p>
//                   {/* </div> */}

//                 </div>
//               )
//             })

//           }
//         </div>

//       </div>


//     </div>

//   )
// }

// export default Template 