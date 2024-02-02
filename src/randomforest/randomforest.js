import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Section1 from '../components/section1/Section1';
import Section2 from '../components/section2/Section2';
import Section3 from '../components/section3/Section3';
import Section4 from '../components/section4/Section4';
import PredictContainer from '../components/predictBox/PredictContainer';
import Footer from '../components/footer/Footer';

const RandomForestRegression = () => {
    const bigtext="Random Forest Regression";
    const smalltext="is an ensemble learning method that combines the predictions from multiple decision trees to produce a more accurate and stable prediction. It is a type of supervised learning algorithm that can be used for both classification and regression tasks.";
    const imgsrc="./randomforest.webp";
    const button="Know More";
    const imgsrc2='./randomforestformula.png';
    const heading2='Know More about Random Forest Regression';
    //change them
    const text1='The random forest model is a type of additive model that makes predictions by combining decisions from a sequence of base models. More formally we can write this class of models as: g(x)=f0(x)+f1(x)+f2(x)+...';
    const text2='Every decision tree has high variance, but when we combine all of them in parallel then the resultant variance is low as each decision tree gets perfectly trained on that particular sample data, and hence the output doesn’t depend on one decision tree but on multiple decision trees. In the case of a classification problem, the final output is taken by using the majority voting classifier. In the case of a regression problem, the final output is the mean of all the outputs. This part is called Aggregation.';
    const text41="Observations And Test Results";
    const text42="On Applying Random Forest Regression On Processed Data, The following results we obtained."
    const heading42="Algorithm";
    const image41="./randomforestalgo.jpg";
    const image42="./randomforestgraph.png";


  return (
    <div>
        <Navbar/>
        <Section1 bigtext={bigtext} smalltext={smalltext} imgsrc={imgsrc} button={button} />
        <Section2 image={imgsrc2} heading2={heading2} />
        <Section3 text1={text1} text2={text2} />
        <Section4 text={text41} text2={text42} heading2={heading42} image41={image41} image42={image42} />
        <PredictContainer modelname="Random Forest Regression Model" />
        <Footer/>
    </div>
  )
}

export default RandomForestRegression;