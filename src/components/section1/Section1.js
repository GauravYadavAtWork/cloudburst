import React from 'react'
import "./section1.css";

const Section1 = (props) => {
  return (
    <div>
        <div className='firstsection'>
            <div className='sec1left'>
                <div className='bigtext'>{props.bigtext}</div>
                <div className='smalltext'>{props.smalltext}</div>
                {props.button ? (
                  <div className='sec1buttons'>
                        <button>{props.button}</button>
                  </div>
                ):(
                  <></>
                )}
            </div>
            <div className='sec1right'><img className='sec1image' alt=' graph' src={props.imgsrc}></img></div>
        </div>
    </div>
  )
}

export default Section1;