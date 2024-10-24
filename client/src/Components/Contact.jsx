import React, { useState } from 'react'
import './Contact.css'
import { Button } from '@mui/material'
import axios from 'axios';
import { toast } from 'react-toastify';

const Contact = () => {
  const [firstName ,setFirstName ] = useState("");
  const [lastName ,setLastName ] = useState("");
  const [ email ,setEmail ] = useState("");
  const [contact ,setContact] = useState("");
  const [message ,setMessage ] = useState("");
  const handleMessage = async(e) =>{
    e.preventDefault();
    try {
      await axios.post("https://legal-sathi-backend.onrender.com/api/v1/message/send",{firstName,lastName,email,contact,message} , {
        withCredentials:true,
        headers:{
          "Content-Type":"application/json",
        },
      }
    ).then(res =>{
        toast.success(res.data.message);
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setMessage("");
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <div>
      <div className="contact__page">
        <div className="image">
            <img src="https://www.cbalaw.org/Portals/COLUMBUS/Images/services/phonecall.jpg" alt="" />
        </div>
        <div className="info">
            <h1>Send Us Message</h1>
            <h5>Contact us</h5>
            <form  onSubmit={handleMessage}>
                <input type="text" placeholder='Firstname' name='firstname' className='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" placeholder='Lastname' name='lastname' className='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <input type="text" placeholder='Email' name='email' className='email' value={email} onChange={(e) => setEmail(e.target.value)}/> 
                <input type="text" placeholder='Contact' name='contact' className='contact' value={contact} onChange={(e) => setContact(e.target.value)}/>
                <textarea rows={7} placeholder='Message' className='message1' value={message} onChange={(e) => setMessage(e.target.value)}/>
                <Button className='btn' variant='outlined' type='submit'>Submit</Button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
