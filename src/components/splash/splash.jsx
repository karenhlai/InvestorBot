import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {
    return(
      <div className="splash-container">
        <h1>Easily achieve your financial goals.</h1>

        <p>Hello, welcome to Investment Advisor, a website that will help 
          you acheive your ideal financial portfolio.</p> 

        <p>Start by browsing through the different portfolios. 
          The number associated with each portfolio describes the risk temperament of each financial distribution.
          For example, a #1 Portfolio describes a person who does not take much financial risks,
          and a #10 portfolio describes a person who very often takes risks.
          Select a portfolio that you would like your financial assets to reflect.</p>


        <p>Once you've made your selection,
          you can enter your own funds in the manage section. 
          Suggestions on how to move your money in order to reflect the balance of categories from your selected portfolio 
          will be presented.
        </p>

        <Link to="/portfolios">Get Started >></Link>
      </div>
    )
  }
};

export default Splash;