import React from 'react'
import './Employment.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { IoReturnUpBack } from "react-icons/io5";

const Employment = () => {
  const navigateTo = useNavigate();
  const gotoHome = () =>{
    navigateTo("/")
  }
  return (
    <div className='employeepage'>
    <div className="employeeinfo">
        <p><span>Employment law</span> , also known as labor law, refers to the body of legal regulations, rules, and standards that govern the relationship between employers and employees. These laws cover a wide range of issues related to employment, including hiring practices, working conditions, wages, benefits, termination, discrimination, and workplace safety. Employment law aims to protect the rights and interests of both employers and employees and promote fair and productive work environments.</p>
        <p><span>Employment Contracts: </span>  Employment law governs the creation and enforcement of employment contracts between employers and employees. Contracts may cover terms and conditions of employment, such as job duties, compensation, benefits, working hours, leave policies, and termination procedures.</p>
        <p><span>Wages and Benefits:</span>  Laws regarding wages and benefits ensure that employees are paid fairly for their work. This includes minimum wage laws, overtime pay, equal pay for equal work, payment of wages on time, and benefits such as health insurance, retirement plans, and vacation leave.</p>
        <p><span> Anti-Discrimination Laws:</span> Employment law prohibits discrimination in hiring, promotion, compensation, and other aspects of employment based on protected characteristics such as race, color, national origin, gender, age, religion, disability, pregnancy, and sexual orientation. Anti-discrimination laws promote equal opportunity and diversity in the workplace.</p>
        <p><span>Workplace Safety: </span> Laws and regulations related to workplace safety and health set standards for employers to provide a safe and healthy work environment for their employees. This includes measures to prevent accidents, hazards, and occupational illnesses, as well as training on safety protocols and access to protective equipment.</p>
        <p><span>Termination and Severance:</span>  Employment law establishes procedures and requirements for terminating employment relationships, including reasons for termination, notice periods, severance pay, and unemployment benefits. It also addresses issues such as wrongful termination, constructive dismissal, and non-compete agreements.</p>
        
    </div>
  <div className="employeeimage">
    <img src="https://thumbs.dreamstime.com/b/full-length-people-different-occupations-standing-against-white-background-44596923.jpg" alt="" />
  </div>
  <Button variant='outlined' onClick={gotoHome}><IoReturnUpBack /></Button>
</div>
  )
}

export default Employment
