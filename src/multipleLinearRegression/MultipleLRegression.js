import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Section1 from '../components/section1/Section1';
import Section2 from '../components/section2/Section2';
import Section3 from '../components/section3/Section3';
import Section4 from '../components/section4/Section4';
import PredictContainer from '../components/predictBox/PredictContainer';
import Footer from '../components/footer/Footer';

const MultipleLRegression = () => {

  const imgsrc='./multipleLRegression/Multiple-Linear-Regression.webp';
  const bigtext='Multiple linear regression';
  const smalltext='refers to a statistical technique that uses two or more independent variables to predict the outcome of a dependent variable.';
  const imgsrc2='./multipleLRegression/multipleRegression2.webp';
  const heading2='Know More about Multiple Linear Regression';
  const text1='Multiple linear regression is a statistical method used to model the relationship between two or more independent variables and a dependent variable. It is an extension of simple linear regression, which involves only one independent variable. In multiple linear regression, the goal is to establish a linear relationship between the dependent variable and multiple independent variables';
  const text2='Multiple linear regression is commonly used in various fields, including economics, finance, biology, and social sciences, to analyze and model the relationships between multiple variables and make predictions or understand the influence of different factors on an outcome';
  const text41="Observations And Test Results";
  const text42="On Applying Multiple Linear Regression On Processed Data, The following results we obtained."
  const heading42="Algorithm";
  const image41="./multipleLRegression/algo.jpg"
  const image42="./multipleLRegression/resultimage.png"

  return (
    <div className='page'>
        <Navbar/>
        <div>
            <Section1 imgsrc={imgsrc} bigtext={bigtext} smalltext={smalltext} button="Know More" />
            <Section2 image={imgsrc2} heading2={heading2} />
            <Section3 text1={text1} text2={text2} />
            <Section4 text={text41} text2={text42} heading2={heading42} image41={image41} image42={image42} />
            <PredictContainer modelname="Multiple Linear Regression Model" />
        </div>
        <Footer/>
    </div>
  )
}

export default MultipleLRegression;