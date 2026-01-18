import { useState } from 'react'
import Card from './assets/Components/Card.jsx'
import './App.css'

function App() {
const[name1, setName1]=useState("");
const[name2, setName2]=useState("");

  return (
    <>
      <div>
       <Card name={name1} setName1={setName1} />
        <Card name={name2} setName1={setName2} />

        <p>I am inside Parent Component and Value of name1 is {name1}</p>
        <p>I am inside Parent Component and Value of name2 is {name2}</p>

      </div>
      
    </>
  )
}

export default App
