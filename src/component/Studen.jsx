import React from 'react'

export default function Studen({students}) {
    
  return (
    <div>
     <ol>{students.map((student, index) => (
        <li key={index}>{student}</li>

     ) )}
      </ol>
    </div>
  )
}
