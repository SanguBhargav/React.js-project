import React, { useId } from 'react'
 export default function Use() { 
  const nameId=useId(); 
  const ageId=useId();
  const addressId=useId();
  const occupation=useId()
  console.log(nameId);
  console.log("AGE ID",ageId)
  console.log("ADDRESS ID",addressId)
  console.log("OCCUPATION ID",occupation)
   return ( 
   <div>
     <nav>
       <label htmlFor={nameId}>name</label>
        <input type="text" id={nameId}/>
         </nav> 
         <nav> 
          <label htmlFor={ageId }>age</label> 
          <input type="text" id={ageId}/> </nav>
          <nav>
            <label htmlFor={addressId}>address</label>
            <input type="text" id={addressId}/>
          </nav>
          <nav>
            <label htmlFor={`${occupation}`}>occupation</label>
            <input type="text" id={occupation}/>
          </nav>
           </div> 
           ) 

   
  }