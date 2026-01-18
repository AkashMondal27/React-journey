import { useState } from 'react'
import Login from './assets/Login'  
import Logout from './assets/Logout'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <div>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle
        </button>
        {isLoggedIn ? <Logout /> : <Login />}
      </div>
     
      
    </>
  )
}

export default App
