import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './Conponents/ChildA'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <ChildA/>
      </div>
    </>
  )
}

export default App
