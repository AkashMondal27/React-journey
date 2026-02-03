import { createContext,  useState } from 'react'

import './App.css'
import ChildA from './Components/ChildA';

// 1. Create Context
 const ThemeContext = createContext('light');

function App() {
     const [theme, setTheme] = useState('light'); // 3.create the valuse to be shared
  return (
    <>
      
          <ThemeContext.Provider  value={{theme,setTheme}}> {/* 2. Provide context value 4. */} 
           <div id="Container" style={{backgroundColor: theme === 'light' ? 'white' : 'black', }}>
               <ChildA />
            </div>
          </ThemeContext.Provider>
    </>
  )
}

export default App

export { ThemeContext }; // Export Context to be used in other components
