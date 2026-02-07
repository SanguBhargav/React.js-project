import React from 'react'

export default function Even() {
    const numbers=[1,2,3,4,5]
  return (
    <div>
        <ul>
            <h2>Even conditional Rendering</h2>
            {numbers.map((number, index) =>
        number % 2 ===0 ?<li key={index}>{number}</li> :null)}   
        </ul>
      
    </div>
  )
}
