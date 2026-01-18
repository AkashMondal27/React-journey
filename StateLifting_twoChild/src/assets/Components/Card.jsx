import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div>
      <input type ='text' value={props.name1} onChange={(e) => props.setName1(e.target.value)} />
        <p> values Inside Child Card : {props.name}</p>

        
    </div>
  )
}

export default Card
