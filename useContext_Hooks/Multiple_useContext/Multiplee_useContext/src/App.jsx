import { createContext, useState } from 'react'

import './App.css'
import ChildA from './Conponents/ChildA'

const ThemeContext = createContext();
const UserContext = createContext();

function App() {
      const [theme, setTheme] = useState('light');
      const [user, setUser] = useState({name: "AKASH MONDAL", mobile: "1234567890", })

  return (
    <>
     <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{theme, setTheme}}>
         <div id="Container" 
         style={{backgroundColor: theme === 'light' ? 'white' : 'black', }}>  
          <ChildA/>
        </div>
      </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
export { ThemeContext, UserContext };
