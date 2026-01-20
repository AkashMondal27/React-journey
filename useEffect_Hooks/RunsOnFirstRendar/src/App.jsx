import { useState , useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)


  useEffect(() => {
    alert("This alert appears on every render!")
  },[]) // Empty dependency array to run only on first render 


   function increment (){
    setCount(count + 1);
  }
  return (
    <>
      <div>
        <button onClick={increment}>Click me</button> 
        <br/>
        <div>Count: {count}</div>
      </div>
     
    </>
  )
}

export default App
