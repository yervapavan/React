import React from 'react'
import { increment,decrement } from '../slices/counterSlice';
import { useDispatch,useSelector } from 'react-redux';

function Counter() {
    const count=useSelector(state =>state.counter.value);
    const dispatch=useDispatch();
  return (
    <div className='bg-black w-[100vw] h-[100vh] text-white text-center'>
    <div className=' text-2xl mb-9'>Counter Example using Redux</div>
    <div className='flex justify-center mb-8'>
    <div className='text-white border-2 p-2 w-[20vw] border-dashed shadow-md'>count is: {count} </div>
    </div>
    <button className='border-2 p-1 rounded-md mr-4 hover:ring-fuchsia-400'onClick={()=>dispatch(increment())}>increment</button> 
    <button className='border-2 p-1 rounded-md ' onClick={()=>dispatch(decrement())}>decrement</button> 
    </div>
  )
}

export default Counter