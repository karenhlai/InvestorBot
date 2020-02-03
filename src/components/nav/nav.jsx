import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor() {
    super();
    
    // this.state = {
    //   isOpen: true
    // }

    // this.toggle = this.toggle.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   }, () => console.log(this.state))
  // };

  // handleClick(e) {
  //   e.preventDefault();
  //   this.setState({
  //     bgColor: 'red'
  //   })
  // }
  
  render() {
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
  }
};

export default Nav;