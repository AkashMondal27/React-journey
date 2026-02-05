import React from 'react'
import {useNavigate} from "react-router-dom";


const Home = () => {

    const  navigatee= useNavigate(); 

    const handleClick=()=>{
        navigatee("/about")
    }

  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleClick}>
        go to about 
      </button>
    </div>
  )
}

export default Home
