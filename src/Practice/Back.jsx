import React from 'react'
import {useState,useCallback} from 'react'
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
});
export default function Back() {
    const [number,setNumber]=useState(1)
    const[text,setText]=useState("")
  
   
        const increment = useCallback(()=>{
 setNumber(prev=>prev+1)
        },[])
        
        
    

  return (
    
    <div>
        <p> Number:{number} </p>
      <input type="text"
      value={text}
      onChange={(e)=>setText(e.target.value)}
      />
      <Child onClick={increment}/>
    </div>
  )
}
