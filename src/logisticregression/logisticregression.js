import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Section1 from '../components/section1/Section1';
import Section2 from '../components/section2/Section2';
import Section3 from '../components/section3/Section3';
import Section4 from '../components/section4/Section4';
import PredictContainer from '../components/predictBox/PredictContainer';
import Footer from '../components/footer/Footer';

const Logisticregression = () => {
    const bigtext="Logistic regression";
    const smalltext="observes features of an object and trains a model in the structure of a tree to predict data in the future to produce meaningful continuous output.";
    const imgsrc="./lg.png";
    const button="Know More";
    const imgsrc2='./lgformula.png';
    const heading2='Know More about Logistic regression';
    //change them
    const text1='Logistic regression is a simple and more efficient method for binary and linear classification problems. It is a classification model, which is very easy to realize and achieves very good performance with linearly separable classes. It is an extensively employed algorithm for classification in industry.';
    const text2=' logistic regression[1] (or logit regression) is estimating the parameters of a logistic model (the coefficients in the linear combination). Formally, in binary logistic regression there is a single binary dependent variable, coded by an indicator variable, where the two values are labeled "0" and "1", while the independent variables can each be a binary variable (two classes, coded by an indicator variable) or a continuous variable (any real value).';
    const text41="Observations And Test Results";
    const text42="On Applying Logistic regression Model On Processed Data, The following results we obtained."
    const heading42="Algorithm";
    const image41="./lgalgo.jpg";
    const image42="./lggraph.jpg";


  return (
    <div>
        <Navbar/>
        <Section1 bigtext={bigtext} smalltext={smalltext} imgsrc={imgsrc} button={button} />
        <Section2 image={imgsrc2} heading2={heading2} />
        <Section3 text1={text1} text2={text2} />
        <Section4 text={text41} text2={text42} heading2={heading42} image41={image41} image42={image42} />
        <PredictContainer modelname="Logistic regression Model" />
        <Footer/>
    </div>
  )
}

export default Logisticregression;