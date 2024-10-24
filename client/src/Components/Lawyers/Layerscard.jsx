import React from 'react'
import './Layerscard.css'
const Layerscard = ({src,name,occupation}) => {
  return (
    <div className='layers'>
      <div className="layerscard">
        <img src={src} alt="" />
        <div className="layerscard_info">
            <h3>{name}</h3>
            <h4>{occupation}</h4>
        </div>
      </div>
    </div>
  )
}

export default Layerscard
