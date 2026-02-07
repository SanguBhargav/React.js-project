import React from 'react'

export default function Exam() {
    const fruits=["apple","banana", "mango","pineapple"]
  return (
    <div>
      <h6>Mapping functioin</h6>
      {fruits.map((fruit,Index) =>(
<li key={Index}>{fruit} --{Index}</li>
      ))
      }
    </div>
  )
}
