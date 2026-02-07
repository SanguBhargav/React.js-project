import React from 'react'

export default function Conditionalrendering() {
     const user=false
  return (
    <div>
    {user ?<h2>Welcome</h2>:<h2>Please Login</h2>}
    </div>
  )
}
