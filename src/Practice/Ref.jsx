import React from 'react'
import { useRef } from 'react'

export default function Ref() {
    const input=useRef(null);
    function handleChange (){
        input.current.focus()
    }
  return (
    <div>
      <input ref={input} 
       placeholder="type something"
       onChange={(e) => {
        console.log(e.target.value)
       }}/>
      <button onClick={handleChange}>Submit</button>
      
      

      
    </div>
  )
}
