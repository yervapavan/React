import React from 'react'
import { useContext } from 'react'
import {themeContext} from './CreateContext'

function UseContext() {
    const theme=useContext(themeContext);
    if (theme===null){
      return null;
    }
  return (
    <div>current theme is <b>{theme}</b></div>
  )
}

export default UseContext