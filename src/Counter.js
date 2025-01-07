
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset, addnumber } from './Counterslice';

function Counter() {
  
  let count = useSelector(state => state.counter.count);
  let vdart = useDispatch();
  
  
  let [add, setadd] = useState('');

  
  const handleAddNumber = () => {
    if (add) {
      vdart(addnumber(add)); 
    }
  };

  
  const handleSubtractNumber = () => {
    if (add) {
      vdart(addnumber(add)); 
      setadd(''); 
    }
  };

  return (
    <div>
      <p className='about'>
        Using useDispatch, useSelector from 'react-redux' and using decrement, increment, reset, addnumber from './Counterslice'.
      </p>
      <h1 >Counter</h1>
      <p className='count'>Counter: {count}</p>
      
      {/* Add Button */}
      <button onClick={() => vdart(increment())}>Add</button>
      
      {/* Subtract Button ) */}
      <button onClick={handleSubtractNumber}>Subtract</button>
      
      {/* Reset Button */}
      <button onClick={() => vdart(reset())}>Reset</button>
      
      {/* Input Field to enter a number */}
      <input 
        type='number' 
        onChange={(e) => setadd(Number(e.target.value))} 
        value={add} 
      />
      
      {/* Add and Submit Button */}
      <button onClick={handleAddNumber}>SUBMIT</button>
    </div>
  );
}

export default Counter;
