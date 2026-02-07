import React from 'react'
import {useState,useCallback,useEffect} from 'react'
import Child from './Child.jsx'
export default function Call() {
    const[count,setCount]=useState(0)
    const[text,setText]=useState("hi")
     const increment=useCallback(()=>{
setCount(prev=>prev+1);
 },[] )

  return (
   
    <div>
        <h3>count:{count}</h3>
        <h3>text:{text}</h3>
      <button onClick={()=>{setText("Hello")}}>change text</button>
   <Child increment={increment} />
    </div>
  )
}
