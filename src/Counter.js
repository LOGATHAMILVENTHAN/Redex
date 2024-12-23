import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,addnumber } from './Counterslice'

function Counter() {
    let count =useSelector(state=>state.counter.count)
    let vdart=useDispatch()
    let [add,setadd]=useState()
    let handleaddnumber=()=>{
      vdart(addnumber(add)) 
      
      setadd("")  
    }
  return (
    <div>
        <h1>Counter</h1>
        <p> counter : {count}</p>
        <button onClick={()=>vdart(increment())}>add</button>
        <button onClick={()=>vdart(decrement())}>sub</button>
        <button onClick={()=>vdart(reset())}>reset</button>
        <input type='number'onChange={(e)=>setadd(Number(e.target.value))} value={add}/>
        <button onClick={handleaddnumber}>Add and submit</button>

    </div>
  )
}

export default Counter