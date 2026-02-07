import React from 'react'

import { useNavigate } from 'react-router-dom'
import {useState , useEffect} from 'react'
export default function Home() {
  const hello=useNavigate();
  const [state,setState]=useState(0)
  useEffect(()=> {
    if(state===10){
      hello("/Services")
    }
  },[state])
  return (
    <div className="hi">

      <h1>Home page</h1>
      <button className="btn service-btn"  onClick={()=>hello("/Services")}>Services</button>
    {state}
    < button className="btn increment-btn" onClick={()=>setState(state+1)}>increment</button>
  
    </div>
  )
}
