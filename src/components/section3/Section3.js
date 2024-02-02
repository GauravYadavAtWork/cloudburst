import React from 'react';
import "./section3.css";

const Section3 = (props) => {
  return (
    <div className='section3'>
        <div className='textbox'>
           {props.text1}
        </div>
        <div className='textbox'>
            {props.text2}
        </div>
    </div>
  )
}

export default Section3;