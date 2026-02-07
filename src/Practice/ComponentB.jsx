import React from 'react'
import {useContext} from 'react'
import {userContext} from './ComponentA.jsx'
export default function ComponentB() {
    const user=useContext(userContext)
  return (
    <div>
        <h1>componentB</h1>
      <h2>{`bye ${user}`}</h2>
    </div>
  )
}
