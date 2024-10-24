import React from 'react'
import './Family.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { IoReturnUpBack } from "react-icons/io5";
const Family = () => {
  const navigateTo = useNavigate();
  const gotoHome = () =>{
    navigateTo("/")
  }
  return (
    <div className='familypage'>
    <div className="familyinfo">
        <p><span>Family law</span> is a branch of legal practice that deals with matters related to family relationships, domestic issues, and personal matters. It encompasses a wide range of topics and issues that affect families and individuals, including marriage, divorce, child custody, adoption, domestic violence, and inheritance.</p>
        <p><span>Marriage and Divorce:</span>  Family law governs the legal aspects of marriage, including the requirements for marriage, rights and responsibilities of spouses, and procedures for divorce, annulment, and legal separation. It covers issues such as property division, spousal support (alimony), and post-divorce matters.</p>
        <p><span>Child Custody and Visitation: </span> Family law addresses child custody arrangements, including legal custody (decision-making authority) and physical custody (residential arrangements). It also establishes visitation schedules and guidelines for parents or guardians who are not the primary custodial parent.</p>
        <p><span>Child Support:</span>  Family law determines the financial support obligations of parents towards their children. This includes calculating child support payments based on income, expenses, and the child's needs, as well as modifying support orders when circumstances change.</p>
        <p><span> Adoption and Guardianship:</span> Family law regulates the legal process of adoption, including adoption eligibility, consent requirements, home studies, and finalization of adoption. It also addresses guardianship arrangements for minors or incapacitated adults who need a legal guardian to make decisions on their behalf.</p>
        <p><span> Domestic Violence and Protection Orders: </span> Family law provides legal protections for victims of domestic violence, including obtaining restraining orders (also known as protection orders or orders of protection) to prevent further abuse and ensure the safety of individuals and their families.</p>
        <p><span> Paternity and Parental Rights: </span> Family law addresses issues of paternity establishment, including genetic testing to determine biological parentage. It also defines parental rights and responsibilities, including parental decision-making, visitation rights, and parental relocation disputes.</p>
        <p><span> Surrogacy and Reproductive Rights: </span>  Family law may also encompass issues related to assisted reproductive technologies, surrogacy agreements, sperm/egg donation, and legal parentage in cases of non-traditional family structures or reproductive arrangements.</p>
    </div>
  <div className="familyimage">
    <img src="https://cms.ezylegal.in/wp-content/uploads/2022/09/Family-Laws-In-India-min.jpeg" alt="" />
  </div>
  <Button variant='outlined' onClick={gotoHome}><IoReturnUpBack /></Button>
</div>
  )
}

export default Family
