import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Section1 from '../components/section1/Section1';
import Section2 from '../components/section2/Section2';
import Section3 from '../components/section3/Section3';
import Section4 from '../components/section4/Section4';
import PredictContainer from '../components/predictBox/PredictContainer';
import Footer from '../components/footer/Footer';

const Svr = () => {
    const bigtext="Support Vector Regression";
    const smalltext="is to find a function that approximates the relationship between the input variables and a continuous target variable, while minimizing the prediction error.";
    const imgsrc="./svr.jpg";
    const button="Know More";
    const imgsrc2='./svrformula.jpg';
    const heading2='Know More about Support Vector Regression';
    //change them
    const text1='support vector machines (SVMs, also support vector networks) are supervised max-margin models with associated learning algorithms that analyze data for classification and regression analysis. ';
    const text2='A version of SVM for regression was proposed in 1996 by Vladimir N. Vapnik, Harris Drucker, Christopher J. C. Burges, Linda Kaufman and Alexander J. Smola.[34] This method is called support vector regression (SVR). The model produced by support vector classification (as described above) depends only on a subset of the training data, because the cost function for building the model does not care about training points that lie beyond the margin.';
    const text41="Observations And Test Results";
    const text42="On Applying Support Vector Regression On Processed Data, The following results we obtained."
    const heading42="Algorithm";
    const image41="./svralgo.jpg"
    const image42="./polygraph.png"


  return (
    <div>
        <Navbar/>
        <Section1 bigtext={bigtext} smalltext={smalltext} imgsrc={imgsrc} button={button} />
        <Section2 image={imgsrc2} heading2={heading2} />
        <Section3 text1={text1} text2={text2} />
        <Section4 text={text41} text2={text42} heading2={heading42} image41={image41} image42={image42} />
        <PredictContainer modelname="Support Vector Regression Model" />
        <Footer/>
    </div>
  )
}

export default Svr;