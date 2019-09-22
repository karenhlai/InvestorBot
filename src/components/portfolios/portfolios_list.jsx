import React from "react";
import { connect } from "react-redux";
import { fetchPortfolios } from "../../actions/portfolio_actions";
import Transactions from '../manage/transactions';

class PortfoliosList extends React.Component {
  componentDidMount() {
    // this.props.fetchPortfolios();
  }

  render() {
    const portfolios = this.props.portfolios.map(portfolio => {
      return (
        <Transactions 
          key={portfolio.id}
          portfolio_id={portfolio.portfiolio_id}
          portfolio_category={portfolio.portfolio_category}
          portfolio={portfolio}
        />
      );
    });


    return (
      <div>
        <h1>
          Rank your own Risk Temperament
        </h1>
        { portfolios }
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
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PortfoliosList);

