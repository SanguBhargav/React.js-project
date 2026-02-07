import React from 'react'
import { useReducer } from 'react'

export default function For() {
    const user={
        name : "",
        age :"",
        DOB:"",
        gender:"",
        email:"",
        mobilenumber:"",
        address:"",
        address:"",
        nationality:"",
        occupation:"",

    }
    function formRegister(state,action){
return {
    ...state,
    [action.field] : action.value
}
    }
    const[state,dispatch]=useReducer(formRegister,user)
    function handleChange (e){
        dispatch({
            field:e.target.name ,
            value:e.target.value 
        })
    }
  return (
    <div className="form-container">
    <h1 style={{color:"red"}}>Form</h1>
      <input type="text"
      name="name"
      value={state.name}
      onChange={handleChange}
      placeholder="enter youor name"
      />
      <input type="number"
      name="age"
      value={state.age}
      onChange={handleChange}
      placeholder="enter your age"
      />
      <input type="date"
      name="DOB"
      value={state.DOB}
      onChange={handleChange}
      placeholder="enter your date of birth"
      />
      <select value={state.gender} onChange={handleChange}>
      <option value="">select gender</option>
      <option value="male">male</option>
      <option value="female">female</option>
      <option value="others">others</option>
      </select>
      <input type="text"
       name="email" 
       value={state.email}
       onChange={handleChange}
       placeholder="enter your email"
       />
       <input type="tel"
       name="phone"
       value={state.mobilenumber}
       onChange={handleChange}
       placeholder="enter your mobile number"
       />
       <input type="text"
       name="address"
       value={state.value}
       onChange={handleChange}
       placeholder="enter your address"
       />
       <input type="text"
       name="nationality"
       value={state.nationality}
       onChange={handleChange}
       placeholder="enter your nationality"
       />
       <input type="text"
       name="occupation"
       value={state.occupation}
       onChange={handleChange}
       placeholder="enter your occupation"
       />

    </div>
  )
}
