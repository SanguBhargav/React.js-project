import React from 'react'
import { Link,Outlet} from 'react-router-dom'

export default function Services() {
  return (
    <div>
   <h1>Service Page</h1>   
   <Link to={"/AppDevelopment"} >AppDevelopment</Link>
   <Link to={"/WebDevelopment"}>WebDevelopment</Link>
   <Outlet/> 
    </div>
  )
}
