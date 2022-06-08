import React from 'react'
import "./section1.css"
import { Link } from 'react-router-dom'
import img1 from "../../assets/image/bg1.jpg"


const Section1 = () => {
  return (
    <>
      <div className='details'>
        <div className="one">
            <h3>New to the Fill-It?</h3>
            <h6>Feel free to Use All ours Resources</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus facere iste aut. Est eius mollitia quidem dignissimos! Repellat ratione omnis a quos voluptatum officia!
            </p>
            <Link to="/">Become a member today</Link>
        </div>
        <div className="two">
            {/* <h3></h3> */}
            <img src={img1} alt="Loading..." />
        </div>
      </div>
    </>
  )
}

export default Section1