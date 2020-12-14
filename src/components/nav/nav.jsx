import React from 'react';
import { NavLink } from 'react-router-dom';
  
const Nav = () => {
  return (
    <div className="nav-container">
      <header>
        InvestorBot
      </header>

      <div className="right-nav">
        <NavLink exact to="/">ABOUT</NavLink>
        <NavLink exact to="/portfolios">PORTFOLIOS</NavLink>
      </div>
    </div>
  )
};

export default Nav;