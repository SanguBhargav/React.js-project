import React from 'react'
import {useState,useEffect} from 'react'
export default function Effec() {
    const [count,setCount]=useState(0)
    const [color,setColor]=useState("green")
   useEffect(() => {
document.title=`count=${count}`
   },[])
   function Add() {
    setCount(count+1)
   }
   function Subtract(){
    setCount(count-1)
   }
   function Changecolor(){
   setColor (color => color=== "green" ? "red" : "green")
   }
  return (
    <div>
       
        <p style={{color:color}}> {count}</p>
      <button onClick={Add}>Add</button>
      <button onClick={Subtract}>Subtract</button>
      <button onClick={Changecolor}>Change color</button>
    </div>
  )
}
