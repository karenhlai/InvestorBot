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
          <div className="portfolio-profile">
            <h3>
              {displayPortfolio.portfolio_category}
            </h3>
            <p>
              {displayPortfolio.portfolio_description}
            </p>
          </div>
        )
    }
  }

  render() {
    return (
      <div className="portfolio-container">
        <h1>What is your risk level?</h1>

        <div className="portfolio-selector">
          <i className="fas fa-chevron-left" onClick={this.decrementNumber}></i>
          <p>{this.state.number}</p>
          <i className="fas fa-chevron-right" onClick={this.incrementNumber}></i>
        </div>


        {/* portfolio profile */}
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

