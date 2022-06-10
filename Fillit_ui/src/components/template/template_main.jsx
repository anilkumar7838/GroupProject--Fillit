import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Divider } from '@mui/material';
import Search from '@mui/icons-material/Search';
import Records from './records.json'
import './template_main.css'
import { Link } from '@mui/material';
function template_main() {
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

        <span>
          FillIT
        </span>
        <ArrowForwardIosIcon style={{ color: 'lightgrey' }} />
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
        <div className='add_more_template'>
          See More Templates
          <KeyboardArrowDownIcon/>
        </div>

      </div>

      <div className='template_footer'>

      </div>

    </>
  )
}

export default template_main

























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