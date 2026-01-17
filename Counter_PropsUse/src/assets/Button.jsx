import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button onClick={props.handleClick}>Click Me</button>
        <button onClick={props.handleReset}>Reset</button>
    </div>
  )
}

export default Button
