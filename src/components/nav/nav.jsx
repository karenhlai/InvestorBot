import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <header>
          InvestorBot
        </header>

        <div className="right-nav">
          <Link to="/">ABOUT</Link>
          <Link to="/portfolios">PORTFOLIOS</Link>
        </div>
      </div>
    )
  }
};

export default Nav;