//This code will not gonna works , it is just for demonstration purpose of useEffect structure.

import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    first  //Side effect code here
  
    return () => {
      second    //cleanup function code here
    }
  }, [third])  //dependency array here
  

  return (
    <>
      <div>
        <h1>Hello World</h1>
      </div>
      
    </>
  )
}

export default App
