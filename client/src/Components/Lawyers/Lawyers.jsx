import React from 'react'
import './Lawyers.css'
import Layerscard from './Layerscard'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Lawyers = () => {
  const navigateTo = useNavigate();
  const gotoHome = () =>{
    navigateTo("/")
  }
  return (
    <>
     <div className="lawyer_page">
      <div className="our_expert">
        <h2>Our Expert Lawyer</h2>
        <div className="our_expertup">
        <Layerscard
        src="https://t3.ftcdn.net/jpg/00/69/90/62/360_F_69906272_95xqHEpDgZTq2MUBHKMUtO4vB3uyIxHI.jpg"
        name="Farhan Shaikh"
        occupation="Civil Lawyer"
        />
        <Layerscard
        src="https://media.istockphoto.com/id/639115088/photo/portrait-of-a-business-man-outdoors.jpg?s=612x612&w=0&k=20&c=dHjVqovQs0sLEpB9lzPuD8q91rOtLk4seVEjxC6GdrM="
        name="Mohd Saad Shaikh"
        occupation="Divorce Lawyer"/>
        <Layerscard
        src="https://t4.ftcdn.net/jpg/02/95/96/79/360_F_295967926_T2nUnmhQc00dwwp3KsvJSPHMP2xhekry.jpg"
        name="Arsalan Shaikh"
        occupation="Criminal Lawyer"/>
        <Layerscard
        src="https://static.vecteezy.com/system/resources/thumbnails/032/411/190/small/a-male-lawyer-stands-confidently-in-the-courtroom-a-portrait-capturing-his-professionalism-and-dedication-to-the-law-generative-ai-photo.jpg"
        name="Azaz Ahmed"
        occupation="Constitutional Lawyer"/>
        </div>
        <div className="our_expertdown">
        <Layerscard
        src="https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg"
        name="Soham Roy"
        occupation="Family Lawyer"/>
        <Layerscard
        src="https://www.huntonak.com/images/content/2/5/v2/25800/Levine-Michael.jpg"
        name="Rahul Chaturvedi"
        occupation="Corporate Lawyer"/>
        <Layerscard
        src="https://media.istockphoto.com/id/514165852/photo/successful-man-portrait.jpg?s=612x612&w=0&k=20&c=P3qvqTEAFXZlD-Uw1fMflEZxThPRBqiP5ls6IP-AWHA="
        name="Samar Yadav"
        occupation="Employment Lawyer"/>
        <Layerscard
        src="https://thelawyer.imgix.net/content/uploads/2020/12/15164744/Banning-Fred-scaled.jpg?auto=compress,format&q=60&w=652&h=434"
        name="Arbaz khan"
        occupation="Immigration lawyer"/>
        </div> 
        <Button variant='text' onClick={gotoHome}>Home</Button>   
      </div>
     </div>
    </>
  )
}

export default Lawyers
