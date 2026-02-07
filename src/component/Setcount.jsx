import React, { useState } from "react"

export default function Setcount() {
    const [count,setcount]=useState(10)
  return (
    <div class="Helio1" >
        <h2>count:{count}</h2>
        <button   onClick={()=>setcount(count+1)}>Increment</button>
    <button class  onClick={()=>setcount(count-1)}>Decrement</button>
   
      <button   onClick={()=>setcount(0)}>Reset</button>
    </div>
  )
}

