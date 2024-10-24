import React, { useContext, useState  } from 'react';
import './Sign.css'
import {useNavigate} from 'react-router-dom'
import { Button } from '@mui/material';
import { Context } from '../main';
import { toast } from 'react-toastify';
import axios from 'axios';


// import { useNavigate } from "react-router-dom";

function SignIn() {
  const { isAuthenticated , setIsAuthenticated } = useContext(Context);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword , setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  const signup = () =>{
  navigateTo('/signup')
  }

  const handleLogin = async(e) =>{
    e.preventDefault();
    try {
      const response = await axios.post("https://legal-sathi-backend.onrender.com/api/v1/user/login",
      {email, password , confirmPassword , role:"Litigant"},
      {
       withCredentials : true,
       headers:{"Content-Type":"application/json"} 
      }
    );
      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigateTo("/")
    } catch (error) {
      toast.error(error.response.data.message);  
    }
  };

  if(isAuthenticated){
    return <Navigate to="/" />;
  }

  return (
    <div>
    <div className="signin_container">
      <h2>Legal Sathi</h2>
      <div className="second_line">
      <p>Don't have an account?
      <div className="sign_up">
      <Button  className='sign_up' variant='text' onClick={signup}>Sign Up</Button> 
      </div>
      </p>
      <form id="Login_form" onSubmit={handleLogin}>
        <label htmlFor="email">Email address</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='Email' value={email}/>
        <label htmlFor="password">Password</label>
        <input type="password"  onChange={(e) => setPassword(e.target.value)} placeholder='Password' value={password}/>
        <label htmlFor="password">Confirm Password</label>
        <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' value={confirmPassword}/>
        <Button type='submit' className='btn1'  >Login</Button>
      </form>
      </div>
      
      <footer>
        <p>©2024 LegalSathi, Inc. All Rights Reserved.</p>
      </footer>
    </div>
    </div>
    
  );
}

export default SignIn;
