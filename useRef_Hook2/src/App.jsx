import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let val= useRef(0);  //  useRef: stores value without re-rendering

  let btnRef = useRef();    // useRef: used to access the button directly (DOM element)

  function handleClick (){
     val.current =val.current + 1;   // Increase ref value (no re-render)
    console.log("value of current :", val.current);
    setCount(count+1);
  }

  useEffect(()=>{
    console.log("render every time")
  })

  function changeColor(){  // Access button and change its style
    btnRef.current.style.backgroundColor = " blue";
  }

  return (
    <>
      <div>
      <button className="btn" 
      ref={btnRef}  // allow to acces the button 
      onClick={handleClick}>incement </button>
      </div>
      <br/>
      <button  className = "btn2" onClick={changeColor}>
        Chnage color
      </button>
       <div> Count : {count}</div>
    </>
  )
}

export default App
