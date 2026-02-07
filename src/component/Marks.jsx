import React from 'react'

export default function Marks({marks}) {
  return (
    <div>
      marks :{marks}
    { marks >=40 ? <p>pass</p> : <p>fail</p>}
    </div>
  )
}
