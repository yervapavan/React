import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function addValue(){
    setCount(count+1);
  }
  function subValue(){
    setCount(count-1);
  }
  return (
    <>
      <h1>A Simple Counter</h1>
      <h2>count: {count}</h2>
      <button onClick={()=>setCount((count)=>count+1)}>Add </button>{"    "}
      <button onClick={subValue}>Subtract</button>
    </>
  )
}

export default App
