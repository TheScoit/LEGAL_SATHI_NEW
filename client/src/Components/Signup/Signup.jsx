import React, { useContext, useState } from 'react'
import './Signup.css'
import { Context } from '../main'
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';

const Signup = () => {
  const { isAuthenticated , setIsAuthenticated } = useContext(Context);



  const [firstName, setFirstName ] = useState("");
  const [lastName,setLastName ] = useState("");
  const [email,setEmail ] = useState("");
  const [phone,setPhone ] = useState("");
  const [password,setPassword ] = useState("");
  const [gender,setGender ] = useState("");
  const [dob,setDob] = useState("");
  // const [role,setRole] = useState("");

  const navigateTo = useNavigate();
  const login =()=>{
    navigateTo("/login")
  }
  const handleRegister = async(e) =>{
    e.preventDefault();
    try {
      const response = await axios.post("https://legal-sathi-backend.onrender.com/api/v1/user/litigant/register",
      {firstName,lastName,email,password,dob,gender,phone ,role:"Litigant"},
      {
       withCredentials : true,
       headers:{"Content-Type":"application/json"},
      }
    );
      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);  
    }
  };
  

  if(isAuthenticated){
    return <Navigate to={"/"}/>;
  }
  return (
    <div>
      <div className="signup_container">
      <h2>Legal Sathi</h2>
      <div className="second_line1">
      <p>Already have an Account?
      <div className="sign_up1">
      <Button  className='sign_up1' variant='text' onClick={login}>Log in</Button> 
      </div>
      </p>
      <form id="Login_form" onSubmit={handleRegister}>
        <div className="name_signup">
        <input className='Fname' type="text" placeholder='FirstName' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
        <input className='Lname' type="text" placeholder='LastName' value={lastName} onChange={(e)=>setLastName(e.target.value)} />
        </div>
        
        <input className='EMAIL__1' type="text" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input className='PHONE__1' type="number" placeholder='Contact No' value={phone} onChange={(e)=>setPhone(e.target.value)} />
       
        <input className='DateofBirth__1' type="date" placeholder='Date of Birth' value={dob} onChange={(e)=>setDob(e.target.value)} />
        <input className='password_11' type="text" placeholder='Create A Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <select value={gender} onChange={(e)=>setGender(e.target.value)} className='gender_1'>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <Button type='submit' className='btn21'>Register </Button>
      </form>
      </div>
      
      <footer>
        <p>©2024 LegalSathi, Inc. All Rights Reserved.</p>
      </footer>
    </div>
    </div>
  )
}

export default Signup
