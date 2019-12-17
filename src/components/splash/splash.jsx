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
        <p>Select your Ideal Financial Distribution.</p>
        <p>Let us handle the work of rebalancing your funds.</p>

        <Link to="/portfolios">Get Started ></Link>
      </div>
    )
  }
};

export default Splash;