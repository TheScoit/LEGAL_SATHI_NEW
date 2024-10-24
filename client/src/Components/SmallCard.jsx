  import React from 'react'
import './SmallCard.css'

const SmallCard = ({src,title,description}) => {
  return (
    <div>
        <div className="smallcard">
            <img src={src} alt="" />
            <div className="smallcard__info">
            <h2>{title}</h2>
            <h4>{description}</h4>
            </div>
        </div>
            <div className="goto__icon">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/014/637/978/small_2x/thin-straight-arrow-icon-black-arrow-pointing-to-the-right-black-direction-pointer-with-rounded-edges-illustration-vector.jpg" alt="" />
            </div>
    </div>
  )
}

export default SmallCard
