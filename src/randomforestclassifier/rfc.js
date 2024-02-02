import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Section1 from '../components/section1/Section1';
import Section2 from '../components/section2/Section2';
import Section3 from '../components/section3/Section3';
import Section4 from '../components/section4/Section4';
import PredictContainer from '../components/predictBox/PredictContainer';
import Footer from '../components/footer/Footer';

const RandomForestClassifier = () => {
    const bigtext="Random Forest Classifier";
    const smalltext="is a meta estimator that fits a number of decision tree classifiers on various sub-samples of the dataset and uses averaging to improve the predictive accuracy and control over-fitting. ";
    const imgsrc="./rfc.png";
    const button="Know More";
    const imgsrc2='./rfcformula.png';
    const heading2='Know More about Random Forest Classifier';
    //change them
    const text1='In a random forest classification, multiple decision trees are created using different random subsets of the data and features. Each decision tree is like an expert, providing its opinion on how to classify the data. Predictions are made by calculating the prediction for each decision tree, then taking the most popular result. (For regression, predictions use an averaging technique instead.)';
    const text2='The RF classifier used for this study consists of using randomly selected features or a combination of features at each node to grow a tree. Bagging, a method to generate a training data set by randomly drawing with replacement N examples, where N is the size of the original training set (Dutta, Paul, Obaid, et al., 2021), was used for each feature/feature combination selected. There are many features in the RF classifier: (1) each time a tree is grown to the maximum depth on new training data using a combination of features. These full-grown trees are not pruned. (2) As the number of trees increases, the generalization error always converges even without pruning the tree, and overfitting is not a problem because of the strong law of large numbers.';
    const text41="Observations And Test Results";
    const text42="On Applying Random Forest Classifier Model On Processed Data, The following results we obtained."
    const heading42="Algorithm";
    const image41="./rfcalgo.jpg";
    const image42="./rfcgraph.jpg";


  return (
    <div>
        <Navbar/>
        <Section1 bigtext={bigtext} smalltext={smalltext} imgsrc={imgsrc} button={button} />
        <Section2 image={imgsrc2} heading2={heading2} />
        <Section3 text1={text1} text2={text2} />
        <Section4 text={text41} text2={text42} heading2={heading42} image41={image41} image42={image42} />
        <PredictContainer modelname="Random Forest Classifier" />
        <Footer/>
    </div>
  )
}

export default RandomForestClassifier;