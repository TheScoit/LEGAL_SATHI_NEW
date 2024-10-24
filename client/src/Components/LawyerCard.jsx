import React from 'react'
import './LawyerCard.css'

const LawyerCard = ({src,name,occupation}) => {
  return (
    <div className='card'>    
      <div className="lawyercard">
        <img src={src} alt="" />
        <div className="lawyercard__info">
        <h3>{name}</h3>
        <h4>{occupation}</h4>
       </div>
      </div>
    </div>
  )
}

export default LawyerCard
