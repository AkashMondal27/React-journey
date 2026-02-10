import { useRef, useState } from 'react'
import { useEffect } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let val= useRef(0);  //  // useRef stores a mutable value that persists across renders without causing re-render

  function handleClick (){
    val.current =val.current + 1;
    console.log("value of current :", val.current);

    setCount(count+1);
    
  }
       

    useEffect(() => {
      console.log(" render every time ")  
    })
    
  return (
    <>
      <div>
        <button className=' btn' onClick={handleClick}>
          increment 
        </button>
        <br/>
        <div>
          count : {count}
        </div>

      </div>
      
    </>
  )
}

export default App
