import { useState } from 'react'
import Login from './assets/components/Login'
import Logout from './assets/components/Logout'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  let result;
  if(isLoggedIn){
    result = <Logout />
  } else {
    result = <Login />
  } 

  return (
    <>
      <div>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          Toggle Login State
        </button>
      </div>
      <div>
        {result}
      </div>
      
    </>
  )
}

export default App
