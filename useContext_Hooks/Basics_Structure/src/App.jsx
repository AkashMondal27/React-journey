import { useState, createContext } from 'react'
import ChildA from './components/ChildA'
import './App.css'

// 1️⃣ Create Context
const UserContext = createContext()

function App() {
  const [user, setUser] = useState({  // create a state to hold user data
    name: "AKASH MONDAL",
    mobile: "1234567890",
    email: "AKAAA@GMAIL.COM"
  })

  return (
    // 2️⃣ Provide context value
    <UserContext.Provider value={user}>
      <ChildA />
    </UserContext.Provider>
  )
}

export default App
export { UserContext }  // 3️⃣ Export Context to be used in other components
