import React from 'react'
import { useEffect,useRef } from 'react'
function Modaldialog({isOpen,children}) {
    const ref=useRef();
    useEffect(()=>{
        if(!isOpen){
            return;
        }
        const dialog=ref.current;
        dialog.showModal();

        return ()=>{
            dialog.close();
        }
    },[isOpen])
  return (
    <div>
        <dialog ref={ref} className='w-[50vw] h-[10vh] bg-black'>{children}</dialog>
    </div>
  )
}

export default Modaldialog