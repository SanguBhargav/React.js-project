import React from 'react'

export default function Sd({name,course,age,gender,college,city,state,mobile,email,year}) {
  return (
    <div class="helio">
     
   <p>   name:{name}</p>
     <p> course:{course}</p>
    <p>  age:{age}</p>
   <p>  gender:{gender}</p>
    <p>  college:{college}</p>
    <p>  city:{city}</p>
    <p>  state:{state}</p>
   <p>   mobile:{mobile}</p>
   <p>   email:{email}</p>
   <p>   year:{year}</p>
    </div>
  )
}
