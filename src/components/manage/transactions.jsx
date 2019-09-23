import React from "react";
import Chart from 'chart.js';
import { connect } from "react-redux";
import { TransactionsForm } from './transactions_form';

class Transactions extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.displayIdealPortfolio(this.props.portfolio.financial_distribution);
    console.log(this.props)
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

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!")
    console.log(e)
  }


  render() {
    const categories = ['Bonds', 'Stocks', 'Real Estate', 'International Stocks', 'Exotic Motor Cars'];
    
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

