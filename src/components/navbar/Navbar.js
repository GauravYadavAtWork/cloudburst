import React, { useState } from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [icon , setIcon] = useState('menu.png');

  const toggleMenu = () => {
    if(isMenuOpen){
        setIcon('menu.png');
    }else{
        setIcon('close.png');
    }
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
        <div className='navbar'>
            <div className='brandname'>Cloud burst Predetermination</div>
            <div className='hamicon' onClick={toggleMenu}>
                <img alt='menu icon' src={icon} className='hamimage'></img>
            </div>
        </div>
        <div className={`offcanvas ${isMenuOpen ? 'open' : ''}`}>
            {/* <div className='hamicon' onClick={toggleMenu}>
                <img alt='menu icon' src={icon} className='hamimage'></img>
            </div> */}
            <div className='brandname'>Cloud burst Predetermination</div>

            <Link to="/" className='link'>
              <div className='offcanvaslink'>Get Started</div>
            </Link>

            <Link to="/MultipleLinearRegression" className='link'>
              <div className='offcanvaslink'>Multiple Linear Regression</div>
            </Link>

            <Link to="/PolynomialRegression" className='link'>
              <div className='offcanvaslink'>Polynomial Regression</div>
            </Link>

            <Link to="/SupportVectorRegression" className='link'>
              <div className='offcanvaslink'>Support Vector Regression</div>
            </Link>
 
            <Link to="/RandomForestRegression" className='link'>
              <div className='offcanvaslink'>Random Forest Regression</div>
            </Link>

            <Link to="/DecisionTreeRegression" className='link'>
              <div className='offcanvaslink'>Decision Tree Regression</div>
            </Link>

            <Link to="/LogisticRegression" className='link'>
              <div className='offcanvaslink'>Logistic Regression</div>
            </Link>

            <Link to="/RandomForestClassifier" className='link'>
              <div className='offcanvaslink'>Random Forest Classifier</div>
            </Link>

            <Link to="/About" className='link'>
              <div className='offcanvaslink'>About Us</div>
            </Link>

            <Link to="/Contact" className='link'>
              <div className='offcanvaslink'>Contact Us</div>
            </Link>
        </div>
    </div>
  )
}

export default Navbar;
