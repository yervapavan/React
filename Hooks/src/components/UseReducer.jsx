import React from 'react'
import { useReducer,useState } from 'react'


function reducer(state,action){
    switch(action.type){
        case "increment":{
            return {
                age:state.age+1,
            }
        }
        case "decrement":{
            return {
                age:state.age-1,
            }
        }
        case "default":{
            throw new Error("invalid operation");
        }
    }

}
const initialstate={
    age:0,
};


function UseReducer() {
    const [state,dispatch]=useReducer(reducer,initialstate);
  return (
    <div>
        <p><b>age:</b>{state.age}</p>
        <button onClick={()=>dispatch({type:"increment"})} className='border-2 bg-black p-2 text-white'>increment</button>
        <button onClick={()=>dispatch({type:"decrement"})} className='border-2 bg-black p-2 text-white'>decrement</button>
    </div>
  )
}

export default UseReducer