import { useState } from 'react'
import Login from './assets/components/Login'
import Logout from './assets/components/Logout'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  function Resutt(){
    switch(isLoggedIn){
      case true:
        return <Logout />;
      case false:
        return <Login />;
      default:
        return null;
    }
  }

  return (
    <>
      <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle
      </button>
      {Resutt()}
      </div>
      
    </>
  )
}

export default App
