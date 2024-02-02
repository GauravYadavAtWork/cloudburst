import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div>
        <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>Regression Models</h4>
                    <ul>
                        <li><a href="/MultipleLinearRegression">Multiple Linear Regression</a></li>
                        <li><a href="/PolynomialRegression">Polynomial Regression</a></li>
                        <li><a href="/SupportVectorRegression">Support Vector Regression</a></li>
                        <li><a href="/DecisionTreeRegression">Decision Tree Regression</a></li>
                        <li><a href="/RandomForestRegression">Random Forest Regression</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Classification Models</h4>
                    <ul>
                        <li><a href="/LogisticRegression">Logistic Regression</a></li>
                        <li><a href="/RandomForestClassifier">Random Forest Classifier</a></li>
                        {/* <li><a href="#">returns</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">payment options</a></li> */}
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>More Links</h4>
                    <ul>
                        <li><a href="/About">About us</a></li>
                        <li><a href="/Contact">Contact us</a></li>
                        <li><a href="/">Get Started</a></li>
                        {/* <li><a href="#">dress</a></li> */}
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    </div>
  )
}

export default Footer