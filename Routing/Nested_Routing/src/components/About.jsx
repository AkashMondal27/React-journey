import React from 'react'
import {useNavigate} from "react-router-dom";

const About = () => {

    const navigatee = useNavigate();
    const handleClick=()=>{
        navigatee("/deshboard")
    }
  return (
    <div>
      <h2> About Page</h2>
      <button onClick={handleClick}>
        go to Deshboard
      </button>
    </div>
  )
}

export default About
