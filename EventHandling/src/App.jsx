import { useState } from 'react'
import './App.css'

function App() {
 
function handalClick(){
  alert("it is clicked");
}
  return (
    <>
      <div>
     <button onClick={handalClick}> Click me</button>

     <p onMouseOver={handalClick}> it is a para</p>
          
      </div>
    </>
  )
}

export default App
