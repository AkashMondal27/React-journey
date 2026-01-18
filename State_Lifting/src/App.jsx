import { useState } from 'react'
import './App.css'
import Card from './components/card'


function App() {

  // 1st, ceate a state in parent component
    const[name , setName ]=useState("");
  return (
    <>
      <div>
      {/* 2nd ,create a Card component & pass the state and setState as props to child component */}
       <Card name={name} setName={setName} />
      
       {/* 4th , display the value of name state in parent component */}
       <p>I am inside Parent Component and Value of name is {name}</p>
      
      </div>
      
    </>
  )
}

export default App
