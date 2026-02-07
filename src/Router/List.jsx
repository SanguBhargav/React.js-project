import React from 'react'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
export default function List() {
    const[users,setUsers]=useState([])
    useEffect(()=>
    {
fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data => {
    setUsers(data)
})
    },[])
  return (
    <div>
      {users.map(user =>(
<ul key={user.id}>
    <li ><Link to={`/Blogs/${ user.name}`}>
   
    {user.id}--{user.name}</Link></li>
</ul>
      ))}
    </div>
  )
}
