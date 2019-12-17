import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor() {
    super();
    
    this.state = {
      isOpen: true
    }

    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    }, () => console.log(this.state))
  };

  handleClick(e) {
    e.preventDefault();
    this.setState({
      bgColor: 'red'
    })
  }
  
  render() {
    return (
      <div className="nav-container">
        <header>
          InvestorBot
        </header>

        <div className="right-nav">
          <Link to="/" onClick={this.toggle}>ABOUT</Link>
          <Link to="/portfolios">PORTFOLIOS</Link>
        </div>
      </div>
    )
  }
};

export default Nav;