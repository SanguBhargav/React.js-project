import React , { useState } from "react"


export default function New() {
    const [formData , SetFormData]=useState({
        Fullname:"",
        email:"",
        phone:"",
        dob:"",
        password:"",
        gender:"",
        role:"",
        company:"",
        experience:"",
        skills:"",
        country:"",
        state:"",
        city:"",
        address:"",
        zip:"",
        terms:false,
    })
        const handleChange = (e) =>{
            const{name , value , type , checked}=e.target;
            SetFormData({
                ...FormData,
                [name]:type==="checkbox" ? checked : value,
            })
        }
        const handleSubmit=(e) => {
            e.preventDefault();
        
            if(!formData.terms){
                alert("please accept terms and conditions");
                return;
            }
       
        }
  return (
    <div>
        <form >
            <input 
            type="text"
            name="fullname"
            value={formData.Fullname}
            placeholder="Enter your Fullname"
            onChange={handleChange}/>
            <input 
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange} />
            <input 
            type="tel"
            name="phone"
            value={formData.phone}
            placeholder="enter the phone number"
            onChange={handleChange}/>
            <input
            type="date"
            name="dob"
            value={formData.dob}
            placeholder="enter your dob"
            onChange={handleChange}/>
            <input 
            type="password"
            name="password"
            value={formData.password}
            placeholder="enter your password"
            onchange={handleChange}/>
            <select name="gender"
            value={formData.gender}
            onChange={handleChange}>

                <option value="">select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
            </select>
            <input 
            type="text"
            name="role"
            value={formData.role}
            placeholder="enter your role"
            onChange={handleChange}/>
            <input type="text"
            name="company"
            value={formData.company}
            placeholder="enter your company"
            onChange={handleChange}/>
            <input
            type="number"
            name="experience"
            value={formData.experience}
            placeholder="0"
            onChange={handleChange}/>
            <select name="skills" 
            value={formData.skills}
            onChange={handleChange}
            placeholder="c,python,html,css,javascript">
                <option value ="">select your skills</option>
                <option value="c">c</option>
                <option value="python">python</option>
                <option value="html">html</option>
                <option value="css">css</option>
                <option value="javascript">javascript</option>
                <option value="reactjs">react js</option>


            </select>
            <input
            type="text"
            name="country"
            value={formData.country}
            placeholder="India"
            onChange={handleChange}/>
            <select 
            input type="text" 
            name="state"
            value={formData.state}
            placeholder="andhra pradesh">
                <option value="">secet your state</option>
                <option value="andhra pradesh">andhra pradesh</option>
                <option value="telengana">telengana</option>
                <option value="tamilnadu">tamilnadu</option>
                <option value="karnataka">karnataka</option>
                <option value="noida">noida</option>
                <option value="gujarat">gujarat</option>
            </select>
<input 
type="text"
name="city"
value={formData.city}
placeholder="enter your city"
onChange={handleChange}/>
<input 
type="text"
name="address"
value={formData.address}
placeholder="enter your address"
onChange={handleChange}/>
<input 
type="text"
name="zip"
value={formData.zip}
placeholder="enter your pincode"
onChange={handleChange}/>
<input 
type="checkbox"
name="terms"
checked={formData.terms}
onChange={handleChange}/>

        </form>
      <button>Submit</button>
    </div>
  )
}

