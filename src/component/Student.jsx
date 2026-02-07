import React from 'react'

export default function Student({name,
  course,
  age,
  gender,
  college,
  city,
  state,
  mobile,
  email,
  year}) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Course: {course}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>College: {college}</p>
      <p>City: {city}</p>
      <p>State: {state}</p>
      <p>Mobile: {mobile}</p>
      <p>Email: {email}</p>
      <p>Passing Year: {year}</p>

    </div>
  )
}
