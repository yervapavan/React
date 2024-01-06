import { useState,useEffect,useCallback,useRef} from 'react'

function App() {
    const passwordRef=useRef(null);
    const [password,setPassword]=useState("");
    const [isSpecialCharacters,setIsSpecialCharacters]=useState(false);
    const [isNUmbersAllowed,setNumbers]=useState(false);
    const [length,setLength]=useState(8);
  const copyPassword=()=>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  }
  const generatePassword=useCallback(()=>{
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (isSpecialCharacters) str+='!@#$%^&*?';
      if (isNUmbersAllowed) str+='0123456789';
      let pass=""
      for (let i=1;i<length;i++){
          pass+=str.charAt(Math.floor(Math.random()*str.length)+1);
      }
      setPassword(pass);
  },[length,isNUmbersAllowed,isSpecialCharacters])
  useEffect(()=>{
    generatePassword();
  },[isNUmbersAllowed,isSpecialCharacters,length])

  return (
    <>
    <div className=' bg-black w-full h-[100vh] flex justify-center items-center text-white'>
     <div className="w-[50vw] h-[35vh] max-w-[500px] border-2 border-white ">
      <div className='w-full h-9 mt-11 flex justify-center '>  
        <input type='text' placeholder='password' value={password} readOnly ref={passwordRef} onClick={copyPassword} className='w-[70%] h-full text-slate-900' /> 
        <button className='bg-blue-500 text-sm w-[15%] '>Copy</button>
      </div>
      <div className='flex justify-evenly mt-11 '>
        <div> <label htmlFor='length'>length</label><input type='range' min={8} max={20} onChange={(e)=>setLength(e.target.value)} name='length'/> </div>
        <div><input type='checkbox' name='Numbers' onChange={()=>setNumbers((prev)=>!prev)}/><label htmlFor='Numbers' >Numbers</label></div>
        <div><input type='checkbox' name='characters ' onChange={()=>setIsSpecialCharacters((prev)=>!prev)}/><label htmlFor='characters'>Charcters</label></div>
      </div>
     </div>
    </div>  
    </>
  )
}

export default App
