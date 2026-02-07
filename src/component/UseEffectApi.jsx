import React , {useState , useEffect} from 'react'

export default function UseEffectApi() {
    const[user,setUser]=useState([])
    const[loading,setLoading]=useState(true)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>{
            setUser(data)
            setLoading(false)
        }
    )
    console.log(user);
 } ,[])

  return (
    <div>
      <ul>
        {user.map((user)=>(
            <li key={user.id}>{user.name}--{user.email}</li>
 ) )}
        
      </ul>
    </div>
  )
}
