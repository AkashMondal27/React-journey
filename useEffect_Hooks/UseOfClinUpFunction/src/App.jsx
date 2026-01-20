import { useState , useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[total, setTotal] = useState(1)


  useEffect(() => {
    alert("This alert appears on every time when count is updated!")
    return () => {
      alert("Cleanup function called before next useEffect execution or on component unmount")
    }
  },[count,])

   function increment (){
    setCount(count + 1);
  }
 
  function incrementTotal (){
    setTotal(total + 1);
  }
  return (
    <>
      <div>
        <button onClick={increment}>update Count</button> 
        <br/>
        <div>Count: {count}</div>
      </div>
      <div>
        <button onClick={incrementTotal}>update Total</button> 
        <br/>
        <div>Total: {total}</div>
      </div>
     
    </>
  )
}

export default App
