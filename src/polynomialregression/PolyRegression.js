import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Section1 from '../components/section1/Section1';
import Section2 from '../components/section2/Section2';
import Section3 from '../components/section3/Section3';
import Section4 from '../components/section4/Section4';
import PredictContainer from '../components/predictBox/PredictContainer';
import Footer from '../components/footer/Footer';

const PolyRegression = () => {

  const bigtext="N-Polynomial Regression";
  const smalltext="is a form of Linear regression where only due to the Non-linear relationship between dependent and independent variables.";
  const imgsrc="polyregression1.png";
  const button="Know More";
  const imgsrc2='polynomial2.webp';
  const heading2='Know More about Polynomial Regression';
  //change them
  const text1='Polynomial regression is a form of regression analysis in which the relationship between the independent variable x and the dependent variable y is modeled as an nth degree polynomial in x. Polynomial regression fits a nonlinear relationship between the value of x and the corresponding conditional mean of y, denoted E(y |x).';
  const text2='Polynomial regression models are usually fit using the method of least squares. The least-squares method minimizes the variance of the unbiased estimators of the coefficients, under the conditions of the Gauss–Markov theorem.';
  const text41="Observations And Test Results";
  const text42="On Applying Polynomial Regression On Processed Data, The following results we obtained."
  const heading42="Algorithm";
  const image41="./polyalgo.jpg"
  const image42="./polygraph.png"


  return (
    <div>
        <Navbar/>
        <Section1 bigtext={bigtext} smalltext={smalltext} imgsrc={imgsrc} button={button} />
        <Section2 image={imgsrc2} heading2={heading2} />
        <Section3 text1={text1} text2={text2} />
        <Section4 text={text41} text2={text42} heading2={heading42} image41={image41} image42={image42} />
        <PredictContainer modelname="Polynomial Regression Model" />
        <Footer/>
    </div>
  )
}

export default PolyRegression;
