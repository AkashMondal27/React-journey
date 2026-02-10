import { useRef, useState } from 'react'

import './App.css'

function App() {
  const [time,setTime]=useState(0);

  let timeRef=useRef(null);

  function startTime(){
    timeRef.current=  setInterval(()=>{
        setTime( time =>time +1);
      } ,1000);
  }
   function stopTime(){
    clearInterval(timeRef.current);
    timeRef.current=null;
  }
   function resetTime(){
    stopTime();
    setTime(0);
  }


  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  // Convet number to text and add 0 in front if needed
  const format = (num) => String(num).padStart(2, "0");

  return (
    <>
      <div>
        <h1> Stop watch <br/>
         {format(hours)} : {format(minutes)} : {format(seconds)}
        </h1>
        <button onClick={startTime}> Start</button>
        <button onClick={stopTime}> Stop</button>
        <button onClick={resetTime}> Reset</button>
      </div>
      
    </>
  )
}

export default App
