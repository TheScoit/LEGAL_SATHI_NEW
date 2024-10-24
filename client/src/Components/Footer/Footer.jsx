import React from 'react'
import './Footer.css'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigateTo = useNavigate();
  
  const criminal = () =>{
    navigateTo("/criminal")
  }

  const bussiness = () =>{
    navigateTo("/bussiness")
  }

  const insurance = () =>{
    navigateTo("/insurance")
  }

  const family = () =>{
    navigateTo("/family")
  }

  const drug = () =>{
    navigateTo("/drug")
  }

  const fire = () =>{
    navigateTo("/fire")
  }

  const employment = () =>{
    navigateTo("/Employment")
  }

  const property = () =>{
    navigateTo("/property")
  }
  

  return (
    <div>
      <div className='footer'>
        <div className="footer1">
            <h1>Legal Sathi</h1>
            <h3>A law firm agency</h3>
            <p>Empowering individuals and businesses with immediate, customized legal advice, Know Your Right envisions a future where navigating legal intricacies is seamless and straightforward.</p>
               
        </div>
        <div className="footer2">
            <h2>Law Spectrum</h2>
            <h4 onClick={criminal}>Criminal Law</h4>
            <h4 onClick={bussiness}>Bussiness Law</h4>
            <h4 onClick={insurance}>Insurance Law</h4>
            <h4 onClick={family}>Family Law</h4>
            <h4 onClick={drug}>Drug Offense</h4>
            <h4 onClick={fire}>Fire Accident</h4>
            <h4 onClick={employment}>Employment Law</h4>
            <h4 onClick={property}>Property Law</h4>
        </div>
        <div className="footer3">
            <h3>Have a Question?</h3>
            <div className="location__info">
            <h5><FaLocationDot className='location' />M.H. Saboo Siddik College of engineering Byculla.</h5>
            </div>
            <div className="call__info">
            <h5><IoCall  className='call'/>022 2301 2922</h5>
            </div>
            <div className="mail__info">
            <h5><IoMail className='mail'/>legalsathi@gmail.com</h5>
            </div>

        </div>
        <div className="footer4">
            <h3>Bussiness Hours</h3>
            <div className="openingdays">
            <h4>Opening Days</h4>
            <p>Monday - Saturday : 10am to 9:30pm </p>
            </div>
            <div className="vacations">
            <h4>Vacations</h4>
            <p>Sunday will be closed</p>
            </div>
        </div>
        <h6>All rights reserved</h6>
    </div>
    </div>
  )
}

export default Footer
