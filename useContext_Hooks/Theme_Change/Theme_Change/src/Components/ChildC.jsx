import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {
    const {theme, setTheme} = useContext(ThemeContext); // 4. Consume context value

       function handleClick(){  {/*  5. Update context value */}
        if (theme === 'light'){
            setTheme('dark');
        } else {
            setTheme('light');
        }
       }
  return (
    <div>
      <button onClick={handleClick}> 
        Change the Theme
        </button>
    </div>
  )
}

export default ChildC
