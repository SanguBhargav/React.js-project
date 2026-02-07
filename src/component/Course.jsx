import React from 'react'

export default function Course({course}) {
  return (
    <div>
      {course != "React" ? (<h2>You are learning React</h2>) : (<h2>Course not available</h2>)}
    </div>
  )
}