import React from 'react'
import {useRef,useState} from 'react'
export default function Re() {
   const[state,setState]=useState(0)
    const hello=useRef(0);
    
        function handleChange (){
       hello.current=hello.current+1 ;
       setState (prev=>prev+1)
       console.log(hello.current)
        }
  


  return (
    <div>
     <h1>{hello.current} </h1>
     <button onClick={handleChange}>increment</button>
    </div>
  )
}
