import React from 'react'
import { useState } from 'react'

function Usestate() {
    const [version,setVersion]=useState(0);
    const handleReset=()=>{
        setVersion((version)=>version+1);
    }
  return (
    <>
        <button onClick={handleReset} className='block'>Reset</button>
        <Form key={version}/>
    </>
  )
}

function Form(){
    const [name,setName]=useState("Taylor");
    return(
        <>
        <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
        />
        <p>Hello! {name}</p>
        </>
    )
}

export default Usestate