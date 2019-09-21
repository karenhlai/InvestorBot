import React from "react";
import { connect } from "react-redux";
import { fetchPortfolios } from "../../actions/portfolio_actions";

class PortfoliosList extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    // this.props.fetchPortfolios();
  }

  render() {
    const { portfolio } = this.props;
    // let portfolios = this.state.portfolios.map(portfolio => {
    //   return (
    //     <li
    //       key={portfolio.id}
    //     />
    //   )
    // });
  
    return (
      <div>
        {/* { portfolios } */}
      </div>
    )
  }
};


const mapStateToProps = state => {
  return ({
    portfolios: state.portfolios,
  })
};

export default connect(mapStateToProps)(PortfoliosList);

