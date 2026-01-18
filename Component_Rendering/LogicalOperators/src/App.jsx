import { useState } from 'react'
import Login from './assets/components/Login'
import Logout from './assets/components/Logout'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <div>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle
      </button>

      {!isLoggedIn && <Login />}
      {isLoggedIn && <Logout />}
      </div>
      
    </>
  )
}

export default App
