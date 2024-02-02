import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Section1 from '../components/section1/Section1';
import Section2 from '../components/section2/Section2';
import Section3 from '../components/section3/Section3';
import Section4 from '../components/section4/Section4';
import PredictContainer from '../components/predictBox/PredictContainer';
import Footer from '../components/footer/Footer';

const DecisionTreeRegression = () => {
    const bigtext="Decision Tree Regression";
    const smalltext="observes features of an object and trains a model in the structure of a tree to predict data in the future to produce meaningful continuous output.";
    const imgsrc="./dtr.webp";
    const button="Know More";
    const imgsrc2='./dtrformula.webp';
    const heading2='Know More about Decision Tree Regression';
    //change them
    const text1='Decision tree builds regression or classification models in the form of a tree structure. It breaks down a dataset into smaller and smaller subsets while at the same time an associated decision tree is incrementally developed. The final result is a tree with decision nodes and leaf nodes. ';
    const text2='A decision node (e.g., Outlook) has two or more branches (e.g., Sunny, Overcast and Rainy), each representing values for the attribute tested. Leaf node (e.g., Hours Played) represents a decision on the numerical target. The topmost decision node in a tree which corresponds to the best predictor called root node. Decision trees can handle both categorical and numerical data.';
    const text41="Observations And Test Results";
    const text42="On Applying Random Forest Regression On Processed Data, The following results we obtained."
    const heading42="Algorithm";
    const image41="./dtralgo.jpg";
    const image42="./dtrgraph.png";


  return (
    <div>
        <Navbar/>
        <Section1 bigtext={bigtext} smalltext={smalltext} imgsrc={imgsrc} button={button} />
        <Section2 image={imgsrc2} heading2={heading2} />
        <Section3 text1={text1} text2={text2} />
        <Section4 text={text41} text2={text42} heading2={heading42} image41={image41} image42={image42} />
        <PredictContainer modelname="Decision Tree Regression Model" />
        <Footer/>
    </div>
  )
}

export default DecisionTreeRegression;