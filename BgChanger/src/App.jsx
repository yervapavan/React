import './App.css'
import { useState } from 'react'
function App() {
  const [bgcolor,setColor]=useState("white");
  return (
    <>
      <div className='root' style={{backgroundColor:bgcolor}}>
        <div className='container'>
          <div className='buttons'>
            <button style={{backgroundColor:"red",color:"white"}} onClick={()=>setColor("red")}>Red</button>
            <button style={{backgroundColor:"blue",color:"white"}} onClick={()=>setColor("blue")}>Blue</button>
            <button style={{backgroundColor:"green",color:"white"}} onClick={()=>setColor("green")}>Green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
