import React , {useState}from 'react'
import './counter.css'


const Counter = () => {
  const[count ,setCount]=useState(0);

  return (
    <div className='counter-container '>
        <p id='para'>you have clicked {count} times </p>
        <button id='btn' onClick={() => setCount(count + 1)}>Click Me</button>
         

          {/* Restart Button */}
      <button
        id="reset-btn"
        onClick={() => setCount(0)}
      >
        Restart
      </button>
    </div>
  )
}

export default Counter
