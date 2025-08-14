import React from 'react'
import { Link } from 'react-router-dom';
import Hero from "../../assets/images/landingpage.jpg";
import "./landing.css"


const Landing = () => {
  return (
    <div className='hero'>
        <div className='intro-text'>
      <h1>
        <span className='tag-line1'>Organize Work and Life</span><br/>
        <span className='tag-line2'>finally.</span>

      </h1>
      <p className='intro-para'>This a Fully functional todo app to support you in you task if you <br/>
        want to increase your productivity
      </p>
     <Link to="/register" > <button className='btn-red'>Register</button></Link>
      <Link to="/login" ><button className='btn-blue'>Login Now</button></Link>
      
    </div>
    <div>
        <img src={Hero} width={'100%'} height={"550px"}alt="" />

    </div>
    </div>
  )
}

export default Landing
