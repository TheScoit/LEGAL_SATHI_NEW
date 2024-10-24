import React from 'react'
import './Drug.css'
import {useNavigate }from 'react-router-dom'
import { Button } from '@mui/material'
import { IoReturnUpBack } from "react-icons/io5";

const Drug = () => {
    const navigateTo = useNavigate();
    const gotoHome = () =>{
      navigateTo("/")
    }
  return (
    <div className='drugpage'>
    <div className="druginfo">
        <p><span>Drug laws</span> refer to the legal regulations and policies that govern the production, possession, distribution, and use of drugs. These laws can vary significantly from one country to another and may include various substances classified as legal or illegal based on their potential for abuse, medicinal value, and societal impact.</p>
        <p><span>Classification of Drugs: </span> Drugs are often classified into different categories based on their potential for abuse and accepted medical use. For example, in the United States, drugs are categorized into schedules (Schedule I to V) under the Controlled Substances Act. Schedule I drugs are considered the most dangerous and have a high potential for abuse and no accepted medical use, while Schedule V drugs have a lower potential for abuse and accepted medical uses.</p>
        <p><span>llegal Drugs: </span>  Many countries have laws that prohibit the possession, production, and distribution of certain drugs deemed illegal. Examples of illegal drugs often include substances like heroin, cocaine, methamphetamine, and marijuana (in some jurisdictions). Penalties for possession or trafficking of illegal drugs can range from fines to imprisonment, depending on the jurisdiction and the quantity involved.</p>
        <p><span>Prescription Drugs:</span> Certain drugs are available only by prescription from a licensed healthcare provider. These drugs may have medical benefits but also carry risks, especially if used improperly. Drug laws typically regulate the prescribing, dispensing, and use of prescription drugs to prevent abuse and ensure patient safety.</p>
        <p><span>Decriminalization:</span>  Some countries or regions have adopted policies of drug decriminalization, where possession of small amounts of certain drugs for personal use may not result in criminal charges. Instead, individuals may face administrative penalties, such as fines or mandatory drug education programs. Decriminalization aims to reduce the burden on the criminal justice system and focus resources on prevention and treatment rather than punishment.</p>
        <p><span>Medical Marijuana and Cannabis Laws:</span> The legality of marijuana and cannabis products varies widely across jurisdictions. Some places have legalized marijuana for medical use, allowing patients to access cannabis-based treatments with a doctor's prescription. Additionally, a growing number of jurisdictions have also legalized marijuana for recreational use, regulating its production, sale, and consumption similarly to alcohol.</p>
        
    </div>
  <div className="drugimage">
    <img src="https://blog.ipleaders.in/wp-content/uploads/2019/09/Drug-possession.jpg" alt="" />
  </div>
  <Button variant='outlined' onClick={gotoHome}><IoReturnUpBack /></Button>
</div>
  )
}

export default Drug
