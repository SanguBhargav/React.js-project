import React from 'react'
import {useState,useEffect,useRef} from 'react'
export default function Reff() {
    const[number,setNumber]=useState(0)
    const Reference=useRef(null)
    useEffect(()=>{
        console.log("hello")

    },[number])
    function handleChange () {
        Reference.current.focus()

    }
  return (
    <div>
      <input type="number"
      value={number}
      ref={Reference}
      onChange={(e) => setNumber(e.target.value)}
/>
<button onClick={handleChange}>Focus</button>
     
      
    </div>
  )
}
