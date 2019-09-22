import React from "react";
import { connect } from "react-redux";
import { fetchPortfolios, fetchPortfolio } from "../../actions/portfolio_actions";

class PortfoliosList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 1
    }
  }

  componentDidMount() {
    this.props.fetchPortfolios();
    this.getPortfolio(0);
  }

  incrementNumber = (e) => {
    e.preventDefault();
    
    if (this.state.number < 10) {
      this.setState({
        number: this.state.number += 1
      });
      this.getPortfolio(this.state.number-1)
    }
  }

  decrementNumber = (e) => {
    e.preventDefault();

    if (this.state.number > 1) {
      this.setState({
        number: this.state.number -= 1
      });
      this.getPortfolio(this.state.number-1)
    }
  }

  getPortfolio = (id) => {
    switch (this.props.portfolios) {
      case null:
        return;
      case false:
        return <div>FALSE!</div>;
      default: 
        const displayPortfolio = this.props.portfolios[this.state.number-1];
        return (
          <div className="portfolio-container">
            {displayPortfolio.portfolio_id}
            {displayPortfolio.portfolio_category}
            {displayPortfolio.portfolio_description}
          </div>
        )
    }
  }

  render() {
    return (
      <div>
        <h1>What is your risk level?</h1>
        <h3>(Select one)</h3>

        <button onClick={this.decrementNumber}> - </button>
        <p> {this.state.number}</p>
        <button onClick={this.incrementNumber}> + </button>

        {this.getPortfolio()}

      </div>
    )
  }
};


const mapStateToProps = state => {
  const portfolios = state.portfolios;
  // debugger
  return ({
    portfolios,
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPortfolios: () => dispatch(fetchPortfolios()),
    fetchPortfolio: (id) => dispatch(fetchPortfolio(id)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PortfoliosList);

