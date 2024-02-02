import React from 'react';
import "./section2.css";

const Section2 = (props) => {
  return (
    <div>
        <div className='secondsection'>
            <div className='heading2'>{props.heading2}</div>
            <div className='imagediv21'>
                <img className='imagediv21img' src={props.image} alt='image 2'></img>
            </div>
        </div>
    </div>
  )
}

export default Section2;