import { useState } from 'react'
import './App.css'
import Button from './assets/Button';

function App() {
  const [count, setCount] = useState(0);

   function handleClick() {
    setCount(count + 1);
  }
  // reset Function
 function handleReset() {
    setCount(0);
  }
  return (
    <>
      <div>
        <Button
         handleClick={handleClick}
         handleReset={handleReset} 
         />
      </div>
      <p>Count: {count}</p>
    </>
  )
}

export default App
