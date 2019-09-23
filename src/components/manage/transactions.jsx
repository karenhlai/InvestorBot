import React from "react";
import Chart from 'chart.js';
import { connect } from "react-redux";
import { TransactionsForm } from './transactions_form';

class Transactions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "Bonds": null, 
      "Stocks": null, 
      "Real Estate": null, 
      "International Stocks": null, 
      "Exotic Motor Cars": null
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    this.displayIdealPortfolio(this.props.portfolio.financial_distribution);
  }

  displayIdealPortfolio(fData) {
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Bonds', 'Stocks', 'Real Estate', 'International Stocks', 'Exotic Motor Cars'],
        datasets: [{
          label: '% of financial distribution',
          data: fData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        animation: {
          animateScale: true
        },
      }
    });
    return (
      myChart
    );
  }

  async handleFormSubmit(e) {
    e.preventDefault();
    // console.log("Form Submitted!")
    await this.setState({
      "Bonds": Number(e.target.Bonds.value), 
      "Stocks": Number(e.target.Stocks.value), 
      "Real Estate": Number(e.target.Real_Estate.value), 
      "International Stocks": Number(e.target.International_Stocks.value), 
      "Exotic Motor Cars": Number(e.target.Exotic_Motor_Cars.value), 
    });

    this.calculateTransactions();
  }

  calculateTransactions = () => {
    const categories = Object.keys(this.state);
    const inputVals = Object.values(this.state);
    const desiredPercentages = this.props.portfolio.financial_distribution;
    debugger
  } 

  render() {
    const categories = ['Bonds', 'Stocks', 'Real_Estate', 'International_Stocks', 'Exotic_Motor_Cars'];
    return (
      <div>
        <h1>Manage My Finances</h1>
        <canvas id="myChart" width="400" height="400"></canvas>

        <TransactionsForm 
          categories={categories}
          handleFormSubmit={this.handleFormSubmit}
        />
        
      </div>
    )
  }
};


const mapStateToProps = (state, ownProps) => {
  const portfolioId = Number(ownProps.match.params.id);
  const portfolio = state.portfolios[portfolioId];
  // debugger
  return ({
    portfolioId, 
    portfolio
  })
};

export default connect(mapStateToProps)(Transactions);

