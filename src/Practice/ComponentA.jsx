import React from 'react'
import {useState} from 'react'
import { createContext } from 'react'
import ComponentB from './ComponentB.jsx'
export const userContext=createContext()
export default function ComponentA() {
    const[user,setUser]=useState("user")
  return (
    <div>
        <h1>componentA</h1>
      <h2>{`hello ${user}`}</h2>
      <userContext.Provider value={user} >
<ComponentB />
      </userContext.Provider>
   
    </div>
  )
}
