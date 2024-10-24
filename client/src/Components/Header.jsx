import React, { useContext } from 'react'
import './Header.css'
import { Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate} from 'react-router-dom'
import { BiMenu } from "react-icons/bi";
import { Context } from './main';
import axios from 'axios';
import { toast } from 'react-toastify';

function Header() {
  
  const {isAuthenticated , setIsAuthenticated} = useContext(Context);

  const navigateTo = useNavigate();
  const gotoHome = () =>{
    navigateTo("/")
  }
  const lawyer = () =>{
    navigateTo("/lawyer")
  }
  const aboutus = () =>{
    navigateTo("/aboutus")
  }
  const Contact = () =>{
    navigateTo("/contact")
  }

  const gotologin = ()=>{
    navigateTo("/login")
  }

  const handleLogout = async() =>{
      await axios.get("https://legal-sathi-backend.onrender.com/api/v1/user/litigant/logout",{
        withCredentials:true,
      })
      .then((res) =>{
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) =>{
        toast.error(err.response.data.message);
      });
  };

  
  return (
    <div className='main'>
      <div className="header">
        <div className="header__left">
        <img src="https://svgsilh.com/svg_v2/450202.svg" alt="" />
        <h1 onClick={gotoHome}>Legal Sathi</h1>
        </div>
        <div className="header__right">  
            <Button variant="text" onClick={gotoHome}>Home</Button><p>|</p>
            <Button variant="text" onClick={lawyer}>Lawyer</Button><p>|</p>
            <Button variant="text" onClick={aboutus}>About Us</Button><p>|</p>
            <Button variant="text" onClick={Contact}>Contact</Button><p>|</p>
            <div className='account'>
            <AccountCircleIcon className='account__icon'/> 
            {isAuthenticated ? (<Button className='logout' onClick={handleLogout}>Log Out</Button>):(<Button variant="text" onClick={gotologin}>Log in</Button>)}
            </div>          
            <span className='responsive_logo'>
           <BiMenu />
            </span>
        </div>
        
      </div>
    </div>
  )
}

export default Header
