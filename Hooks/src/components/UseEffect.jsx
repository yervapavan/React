import React, { useState } from 'react'
import Modaldialog from './Modaldialog'
function UseEffect() {
    const [show,setShow]=useState(false);
  return (
    <div>
        <div>
            <button className='border-2 border-black bg-slate-100' onClick={()=>setShow(true)}>open Dialog</button>
        </div>
        <Modaldialog isOpen={show}>
            <div className='border-2 border-black p-4 bg-black text-white'>
            <p>This is a model</p>
            <button className='border-2 border-black bg-slate-100 text-black' onClick={()=>setShow(false)}>close</button>
            </div> 
        </Modaldialog>
    </div>
  )
}

export default UseEffect