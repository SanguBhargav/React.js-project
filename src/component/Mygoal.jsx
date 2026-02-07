import React from 'react'
import{useState,useEffect} from 'react'
export default function Mygoal() {
    const Apiurl="https://jsonplaceholder.typicode.com/users"
    const[users,setUsers]=useState([])
    const[name,setName]=useState("")
    const [email,setEmail]=useState("")
    
    
    const fetchUsers =()=>{
        fetch(Apiurl)
        .then(res=>res.json())
        .then(data=>{
            setUsers(data)
        })
    }
    useEffect(() => {
        fetchUsers()
        } , [])

    const createUser =()=>{
        const newUser={name ,email}
        fetch (Apiurl , {
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(newUser),
        })
        .then(res=>res.json())
        .then(data=> {
            setUsers ([...users ,data])
            setName("")
            setEmail("")
        })
    }
    const updateUser =(id)=>{
const updateuser={name:"updated-name",email:"update-email@gmail.com"}
fetch (Apiurl + "/" + id , {
    method:"PUT",
    headers: {"Content-Type": "application/json"},
    body:JSON.stringify(updateuser),
} )
.then(res=>res.json())
.then(data => {
    const updatedList= users.map(user => 
        user.id===id ? data : user
    )
setUsers (updatedList)
      });
    
  };
  const deleteUser =(id)=> {
    fetch(Apiurl + "/" + id, {
        method:"DELETE",
    })
    
.then(() =>{
    const remaining=users.filter(user=>user.id!==id)
    setUsers(remaining)
})


  }




    

    
  return (
    <div>
        <input
         placeholder='Enter the name'
         value={name}
         onChange={e =>setName(e.target.value)}
          />
         <input 
         placeholder='Enter the email'
         value={email}
         onChange={e=>setEmail(e.target.value)}
         />
      <h3>user list</h3>
      <button onClick={createUser}>
        Add User
      </button>

      <h3>User List</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} — {user.email}
            <button onClick={() => updateUser(user.id)}>
            Update 
            </button>
<button onClick={()=> deleteUser(user.id)}>
    Delete
</button>
        </li>
        ))}    
      </ul>
    </div>
  )
}
