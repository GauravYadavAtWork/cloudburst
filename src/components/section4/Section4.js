import React from 'react';
import "./section4.css";

const Section4 = (props) => {
  return (
    <div className='section4'>
        <div className='heading4'>{props.text}</div>
        <div className='para4'>{props.text2}</div>
        <div className='heading42'>{props.heading2}</div>
        <div className='imagediv1'><div className='imagediv'><img className='image41' src={props.image41}></img></div></div>
        <div className='heading42'>Visualization of Result</div>
        <div className='imagediv1'><div className='imagediv2'><img className='image42' src={props.image42}></img></div></div>
        <div className='text4'></div>

    </div>
  )
}

export default Section4;