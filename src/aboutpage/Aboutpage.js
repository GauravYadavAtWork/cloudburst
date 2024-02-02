import React from 'react';
import Navbar from '../components/navbar/Navbar';
import './aboutpage.css';
import Footer from '../components/footer/Footer';

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className='aboutpage'>
        <div className='about-section'>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutPage;
