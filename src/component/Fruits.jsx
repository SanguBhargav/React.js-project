import React from 'react'

export default function Fruits() {
    const fruits =["apple","mango","banana"]
  return (
    <div>
      <ul>{fruits.map((fruit, ind)=> (
        <li key={ind}>{fruit}</li>
      ))}
        </ul>
    </div>
)}

