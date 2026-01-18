import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div>
        {/* 3rd use the props in child component */}
      <input type ='text' onChange={(e)=>props.setName(e.target.value)} />
      <p> values Inside Card : {props.name}</p>
    </div>
  )
}

export default Card
