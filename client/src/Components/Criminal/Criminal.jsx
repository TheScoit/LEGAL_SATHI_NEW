import React from 'react'
import './Criminal.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { IoReturnUpBack } from "react-icons/io5";
const Criminal = () => {
  const navigateTo = useNavigate();
  const gotoHome = () =>{
    navigateTo("/")
  }
  return (
    <div className='criminalpage'>
        <div className="criminalinfo">
            <p><span>Criminal law </span>encompasses a body of rules and statutes that define conduct deemed harmful to society and establish the punishment for such conduct. It serves multiple purposes, including deterrence, punishment, rehabilitation, and protection of the public. Crimes are generally categorized as either misdemeanors or felonies based on their severity, with felonies carrying more severe penalties such as imprisonment for over a year or even capital punishment in some jurisdictions. The elements of a crime typically include the actus reus (the guilty act) and mens rea (the guilty mind), although strict liability offenses may not require proof of intent. Criminal law proceedings involve a complex legal process that includes investigations, arrests, trials, and sentencing, all governed by constitutional principles and procedural safeguards to ensure fair treatment for defendants.</p>
            <p><span>Types of Crimes:</span> Criminal law covers a wide range of offenses, including but not limited to violent crimes (such as murder, assault, and robbery), property crimes (such as theft, burglary, and vandalism), white-collar crimes (such as fraud, embezzlement, and insider trading), drug offenses, cybercrimes, and more. Each type of crime may have specific elements and penalties associated with it.</p>
            <p><span>Punishments:</span>  The punishments for criminal offenses can vary widely depending on factors such as the severity of the crime, the defendant's criminal history, and mitigating or aggravating circumstances. Common penalties include fines, probation, imprisonment, community service, and in extreme cases, the death penalty (in jurisdictions that allow it).</p>
            <p><span>Legal Principles:</span> Criminal law is governed by several fundamental legal principles, including the presumption of innocence (the principle that a defendant is considered innocent until proven guilty beyond a reasonable doubt), the right to legal representation, the prohibition against double jeopardy (being tried twice for the same offense), and the right to a fair and speedy trial.</p>
            <p><span>Criminal Procedure:</span> The criminal justice process involves various stages, starting with an investigation by law enforcement agencies to gather evidence, followed by an arrest if there is probable cause to believe a crime has been committed. Subsequently, the case may proceed to trial, where the prosecution presents evidence and arguments to prove the defendant's guilt, and the defense presents counterarguments and evidence to challenge the prosecution's case. The verdict is determined by either a judge or a jury, depending on the legal system.</p>
        </div>
      <div className="criminalimage">
        <img src="https://images.inc.com/uploaded_files/image/1920x1080/getty_488278037_82220.jpg" alt="" />
      </div>
      <Button variant='outlined' onClick={gotoHome}><IoReturnUpBack /></Button>
    </div>
  )
}

export default Criminal
