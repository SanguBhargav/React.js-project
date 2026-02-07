import React from 'react'
import {useState} from 'react'
export default function Like() {
    const [likes,setLikes]=useState(90);
  return (
    <div>
      <h3>Use State</h3>
      <h4>{likes}</h4>
      <button onClick={()=>setLikes(likes+1)}>Likes</button>
      <button onClick={()=>setLikes(likes-1)}>Dislikes</button>
      {likes >=100 && <p>your vedio is getting more liked</p>}
    </div>
  )
}
