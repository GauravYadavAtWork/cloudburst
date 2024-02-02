import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Section1 from '../components/section1/Section1';
import Footer from '../components/footer/Footer';

const Homepage = () => {
  const smalltext = "to predict and mitigate the occurrence of cloudburst events, advancing the frontier of weather forecasting and disaster prevention";
  const bigtext="Unleashing the power of Machine Learning Algorithms";
  const imgsrc='homepageimg2.png';
  const button = "Get Started";

  return (
    <div>
        <Navbar/>
        <div className='homepage'>
             <Section1  smalltext={smalltext} bigtext={bigtext} imgsrc={imgsrc} button={button} />
        </div>
        <Footer/>
    </div>
  )
}

export default Homepage;