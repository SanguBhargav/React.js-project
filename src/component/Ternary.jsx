import React from 'react'

export default function Ternary() {
    const user=false
  return (
    <div>
      {user ? <h2>Welcome User</h2> : <h2>Please Login</h2>}
    </div>
  )
}
