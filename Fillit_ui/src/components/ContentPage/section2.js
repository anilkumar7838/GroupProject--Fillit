import React from 'react'
import "./section2.css"

import img from "../../assets/image/About/img8.webp"
const Section2 = () => {
  return (
      <>
        <div className='content-2'>
            <div className="formImg">
                <img src={img} alt="loading...." />
            </div>
            <div className="text-detail">
                <h2>Hello, We are Fill-It</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia aliquid inventore necessitatibus quasi, quos fugiat. Alias deleniti dolorum iste? Nam consequuntur exercitationem ex quidem placeat vel doloremque, enim quibusdam repellat id. Nisi ipsum veritatis esse eum, doloribus dolor. Eum in sit nisi quos earum!
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, accusantium adipisci accusamus veritatis id velit, sed quasi quisquam provident cupiditate maiores rerum?
                </p>
            </div>
        </div>
      </>
  )
}

export default Section2