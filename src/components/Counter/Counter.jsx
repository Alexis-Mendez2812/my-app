import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {

    const [number, setNumber] = useState(0)


 function handleClick(order) {

    switch (order) {
        case "reset": setNumber(0)
                    break;
        case "resta": setNumber(number-1)
                    break;
        case "suma": setNumber(number+1)
                    break;
        case "suma2": setNumber(number+2)
                    break;
        case "x2": setNumber(number*2)
                    break;
    
        default:
            break;
    }
    
 } 

  return (
    <div  className='counter-container' >
        <button className='set-counter' onClick={()=>handleClick("resta")} >-1</button>
        <button className='set-counter' onClick={()=>handleClick("suma")} >+1</button>
        <p   className='number'  >{number}</p> 
        <button className='set-counter' onClick={()=>handleClick("suma2")} >+2</button>
        <button className='set-counter' onClick={()=>handleClick("reset")} >Reset</button>
        <button className='set-counter' onClick={()=>handleClick("x2")} >x2</button>
        { number>50 &&  <button className='set-counter' onClick={()=>handleClick("reset")} >Click Me 😁</button>}


    </div>
  )
}

export default Counter