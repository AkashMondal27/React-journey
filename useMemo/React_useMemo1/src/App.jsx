import { useState , useMemo} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[input, setInput]=useState(0);
  // making it expensive as it need more time to run
  function expensiveText(num){
    console.log("make expensive text");
    for(let i=0;i<=10000000; i++){}  
    return num*2;
  }
  // let doublevalue = expensiveText(input); 
  let doublevalue= useMemo(() => expensiveText(input), [input])
  return ( 
    <>
      <div>
       <button onClick={()=>setCount(count +1)}>
        Increment 
       </button>
      </div>
      <div>
        Count :{count}
      </div>

      <div>
        Double :{doublevalue}
      </div>
      <input 
        type='number'
        placeholder='enter a number '
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        >
      </input>
    </>
  )
}

export default App
