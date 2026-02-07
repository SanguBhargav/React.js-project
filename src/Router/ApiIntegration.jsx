import React from 'react'
import {useState,useEffect} from 'react'
import { Await } from 'react-router-dom'
export default function ApiIntegration() {
    const [user,setUser]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)
    useEffect (() =>{
        async function fetchUsers (){
            try { setLoading(true)
         const response = await fetch ("https://jsonplaceholder.typicode.com/users")
         if(!response.ok) {
            throw new Error ("failed to fetch data")
         }
         const data=await response.json()
         setUser(data)
             }catch(error){
                setError('Error message')
             }finally{
                setLoading(false)
             }
             



        }
        fetchUsers()
    },[])
    if (loading) return <p>loading.....</p>
    if (error) return <p> error.....</p>
  return (
    <div>
      <h2>user list</h2>
      { user.map((user => (
<div key={user.id}>
    <h3>{user.name}</h3>
    <h4>{user.email}</h4>
    </div>
      )))}
    </div>
  )
}
