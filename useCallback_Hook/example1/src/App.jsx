import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildComponent from './components/childComponent'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count +1);
  }

  return (
    <>
      <div>
        <div>
          count:{count}
        </div> 
        <br/>
        <div>
          <button onClick={handleClick}>Increment </button>
        </div> 
        <br/>
        <br/>
        <div>
          <ChildComponent buttonName= 'click me' />
        </div>
      </div>
     
    </>
  )
}

export default App
