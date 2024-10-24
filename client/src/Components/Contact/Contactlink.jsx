import React, { useEffect, useState } from 'react'
import './Contactlink.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

const Contactlink = () => {
  const navigateTo = useNavigate();
  const gotoHome = () =>{
    navigateTo("/")
  }

  
  const [firstName, setFirstName ] = useState("");
  const [lastName,setLastName ] = useState("");
  const [email,setEmail ] = useState("");
  const [phone,setPhone ] = useState("");
  const [Appointment_date,setAppointment_date ] = useState("");
  const [gender,setGender ] = useState("");
  const [dob,setDob] = useState("");
  const [department,setDepartment] = useState("");
  const [attorney_firstName,setAttorney_firstName] = useState("");
  const [attorney_lastName,setAttorney_lastName] = useState("");
  const [Address,setAddress] = useState("");
  const [hasVisited,setHasVisited] = useState("");


  const departmentsArray = [
    "Criminal Lawyer",
    "Civil Lawyer",
    "Family Lawyer",
    "Employment Lawyer",
    "Contract Lawyer",
    "Corporate Lawyer",
    "Immigration Lawyer",
    "Personal injury Lawyer",
    "Intellectual property Lawyer",
    "Tax Lawyer",
    "Bankruptcy Lawyer",
    "Constitutional Lawyer",
    "DUI Lawyer",
    "Disability Lawyer",
    "Sports Lawyer",
    "International Lawyer",
    "Education Lawyer"
  ];

  

  const [attorney,setAttorney] = useState([]);
  useEffect(()=>{
    const fetchAttorney = async() =>{

        const {data} = await axios.get("https://legalsathi.onrender.com/api/v1/user/Attorneys",

      {withCredentials:true}
    );
    setAttorney(data.attorney);
    };
    fetchAttorney();
  },[]);

  const handleAppointment = async(e) =>{
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const {data} = await axios.post("https://legalsathi.onrender.com/api/v1/appointment/post",{
        firstName,lastName,email,dob,gender,phone,Appointment_date,Address,attorney_firstName,attorney_lastName,department,hasVisited:hasVisitedBool,
      },{
        withCredentials:true,
        headers:{
          "Content-Type":"application/json",
        }
      });
      toast.success(data.message);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <div className='contactlink'>   
      <div className="contactimage">
        <img src="https://www.cbalaw.org/Portals/COLUMBUS/Images/services/phonecall.jpg" alt="" />
      </div>
      <div className="contactinfo">
           <h3>Want Consulation ?</h3>
           <h4>Book Appointment </h4>
           <form id="form" onSubmit={handleAppointment}>
            <div className="name_form">
          <input className='F_name1' type="text" placeholder='FirstName' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
          <input className='L_name1' type="text" placeholder='LastName' value={lastName} onChange={(e)=>setLastName(e.target.value)} />
          </div>
          <div className="email_form">
          <input className='email_1' type="text" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input className='phone_1' type="text" placeholder='Contact No' value={phone} onChange={(e)=>setPhone(e.target.value)} />
          </div>        
          <input className='dob_1' type="date" placeholder='DateofBirth' value={dob} onChange={(e)=>setDob(e.target.value)} />
          <select value={gender} onChange={(e)=>setGender(e.target.value)} >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          </select>
          <input type="date" placeholder='AppointmentDate' className='appointment_date' value={Appointment_date} onChange={(e) => setAppointment_date(e.target.value)} />
          <select className='department' value={department} onChange={(e)=>{
            setDepartment(e.target.value);
            setAttorney_firstName("");
            setAttorney_lastName("");
          }}>
            {
              departmentsArray.map((depart,index)=>{
                return(
                  <option value={depart} key={index}>
                    {depart}
                  </option>
                );
              })}
          </select>
          <select className='selecting' value={`${attorney_firstName} ${attorney_lastName}`} onChange={(e)=>{
            const [firstName,lastName] = e.target.value.split(" ");
            setAttorney_firstName(firstName);
            setAttorney_lastName(lastName);
          }}
          disabled={!department}
          >
            <option value="">Select Attorney</option>
            {
            attorney && attorney.filter(attorney => attorney.attorneyDepartment === department).map((attorney,index)=>{
                return (
                  <option value={`${attorney.firstName} ${attorney.lastName}`} key={index}>
                    {attorney.firstName} {attorney.lastName}
                  </option>
                );
              })
            }
          </select>
          <div >
            <textarea className='ADDRESS' rows="6" value={Address} onChange={(e) => setAddress(e.target.value)} placeholder='Address'/>
          </div>
          <div className="box">
          <p>Have you visited Before?</p>
          <input type="checkbox" checked={hasVisited} onChange={(e)=>setHasVisited(e.target.checked)} className='checkBOX'/>
          </div>
        <div className="btn1">
        <Button type='submit' className='btn4'>Get Appoint </Button>
        <Button type='cancel' className='btn5' onClick={gotoHome}>Cancel</Button>
        </div>
      </form>
        </div>
      </div>
    </div>
  )
}

export default Contactlink
