import { useState } from 'react'
import ChildA from './components/ChildA'
import './App.css'

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
