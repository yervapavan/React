import React from 'react'
import { useCallback,useState } from 'react'

//useCallback is a react hook that let's cache the function defintion between re-renders

function UseCallback() {
    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(0);
    const [result,setResult]=useState(null);
    const handleSubmit=useCallback((num1,num2)=>{
            setResult(num1*num2);
    },[num1,num2])
  return (
    <div>
        <input className=' border-black border-2' type='number' onChange={(e)=>setNum1(e.target.value)}/>
        <br/>
        <input className=' border-black border-2' type='number' onChange={(e)=>setNum2(e.target.value)}/>
        <br/>
        <button className=' border-black border-2 bg-slate-200' type="submit" onClick={()=>handleSubmit(num1,num2)}>submit</button>
        <p><b>Result:</b> {result}</p>
    </div>
  )
}

export default UseCallback