import React, { useState, useEffect } from "react";
import './Goal.css'


const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function Apple() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ id: "", name: "", email: "" });
  const [isEdit, setIsEdit] = useState(false);

  
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    const newUser = {
      id: users.length + 1,
      name: form.name,
      email: form.email,
    };

    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers([...users, data]);
        setForm({ id: "", name: "", email: "" });
      });
  };

  // EDIT DATA (FILL FORM)
  const handleEdit = (user) => {
    setForm(user);
    setIsEdit(true);
  };

  
  const handleUpdate = () => {
    fetch(`${API_URL}/${form.id}`, {
      method: "PUT",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((updatedUser) => {
        setUsers(
          users.map((u) => (u.id === updatedUser.id ? updatedUser : u))
        );
        setForm({ id: "", name: "", email: "" });
        setIsEdit(false);
      });
  };

 
  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" }).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  return (
    <div className="container">
      <h2>Crud</h2>

      <div className="form">
        <input
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />

        {isEdit ? (
          <button className="update" onClick={handleUpdate}>
            Update
          </button>
        ) : (
          <button className="add" onClick={handleAdd}>
            Add
          </button>
        )}
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="edit" onClick={() => handleEdit(user)}>
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
