import React from "react";
import { connect } from "react-redux";

class Transactions extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      </div>
    )
  }
};


const mapStateToProps = (state, ownProps) => {
  const portfolio = ownProps;
  debugger
  return ({
    portfolio,
  })
};

export default connect(mapStateToProps)(Transactions);

