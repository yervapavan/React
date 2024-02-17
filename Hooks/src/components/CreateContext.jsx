import React from 'react'
import { createContext,useState } from 'react'
import UseContext from './UseContext';

export const themeContext=createContext(null);

function CreateContext() {
  const [theme,setTheme]=useState("light");
  return (
    <div>
        <input type='checkbox' className='border-2 border-black' checked={theme==='dark'} onChange={(e)=>setTheme(e.target.checked ? 'dark':'light')}/>
        <themeContext.Provider value={theme}>
            <UseContext/>
        </themeContext.Provider>
    </div>
  )
}

export default CreateContext