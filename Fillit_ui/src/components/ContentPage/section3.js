import React from 'react'
import img1 from "../../assets/image/feature/img1.png";
import img2 from "../../assets/image/feature/img2.jpg";
import img3 from "../../assets/image/feature/img7.webp";
import icon1 from "../../assets/image/feature/icon2.svg"
import icon2 from "../../assets/image/feature/icon3.svg"
import icon3 from "../../assets/image/feature/icon4.svg"
import "./section3.css"
const Section3 = () => {
    const options=[{
        img:img1,
        heading:"Build",
        para:"Lorem, ipsum dolor",
        icon:icon1,
        info:"Create new or import your existing form or survey into our builder. Integrate it with your workflow apps, and share it with the world!"
    },{
        img:img2,
        heading:"Analyse",
        para:"Lorem, ipsum dolor",
        icon:icon2,
        info:"See the detailed analytics of how users interact with your form and get suggestions from our AI on the problematic areas."
    },{
        img:img3,
        heading:"Optimize",
        para:"Lorem, ipsum dolor",
        icon:icon3,
        info:"Apply suggestions as you see fit. Utilize A/B testing, Abandoned Form Recovery, custom notifications, and drive up your conversions!"
    }]
  return (
      <>
        <div className='features-main'>
            <h2>Features Highlights</h2>
            <p>How Fillit works its magic to analyse and track the performance of your web form processes</p>
            <div className="classMenu">
                {options.map((data)=>{
                    return(
                        <div className="feature">
                        <div className="feature-Img">
                            <img src={data.img} alt="loading..." />
                        </div>
                        <div className="feature-details">
                            <div className="tag1">
                                <div className="tag1-detail">
                                    <h4>{data.heading}</h4>
                                    <p>{data.para}</p>
                                </div>
                                <div className="symbol">
                                    <img src={data.icon} alt="sorry!!" />
                                </div>
                            </div>
                            <div className="info">
                                <p>{data.info}</p>
                            </div>
                        </div>
                    </div>
                    );
                })}
                {/* <div className="feature">
                    <div className="feature-Img">
                        <img src={img1} alt="loading..." />
                    </div>
                    <div className="feature-details">
                        <div className="tag1">
                            <div className="tag1-detail">
                                <h4>Build</h4>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                            <div className="symbol">
                                <img src={icon1} alt="sorry!!" />
                            </div>
                        </div>
                        <div className="info">
                            <p>Create new or import your existing form or survey into our builder. Integrate it with your workflow apps, and share it with the world!</p>
                        </div>
                    </div>
                </div> */}
            </div>   
        </div> 
      </>
  )
}

export default Section3