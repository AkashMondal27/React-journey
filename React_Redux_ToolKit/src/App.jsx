
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment ,incrementByAmount,reset } from './features/counter/CounterSlice';
import { useState } from 'react';
 

function App() {
  const [amount , setAmount]=useState("");

  const count= useSelector((state)=> state.counter.value);
  const dispatch= useDispatch();

  function handleIncrementClick (){
    dispatch(increment());

  }
  function handleDecrementClick(){
    dispatch(decrement());
  }

  function handleResetClick(){
    dispatch(reset());
    setAmount("");
  }

  function handleIncAmountClick(){
    dispatch (incrementByAmount( amount));
  }
  return (
    <>
      <div className="container">
        <button onClick={ handleIncrementClick}> +</button>
        <p> Counter : {count}</p>
        <button onClick={handleDecrementClick}> -</button>
        <input 
         type='Number'
         value={amount}
         placeholder='Enter the value '
         onChange={(e)=>setAmount(e.target.value)} />
         <button className=' amount' onClick={handleIncAmountClick}>
            Increment<br/> by amount
         </button>
         <button className=' reset' onClick={handleResetClick}>
            Reset
         </button>
      </div>
      
    </>
  )
}

export default App
