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
        title: {
          display: true,
          text: 'Your Ideal Portfolio', 
          fontSize: 15,
        }
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

    console.log(this.state)
    this.calculateTransactions();
  }

  calculateTransactions = () => {
    const div = document.getElementById("calculate-transactions");
    let thatState = this.state;
    const categories = Object.keys(thatState);
    const inputVals = Object.values(thatState);
    // const idealPercentages = this.props.portfolio.financial_distribution;
    // debugger

    const sum = inputVals.reduce((acc, curr) => curr + acc);
    const avg = sum / inputVals.length;
    
    const sortedCat = categories.sort((cat1, cat2) => thatState[cat1] - thatState[cat2]);

    const sortedInputVals = sortedCat.map(cat => thatState[cat] - avg);

    let i = 0;
    let j = sortedInputVals.length - 1;
    let transaction;

    while (i < j) {
      transaction = Math.min(-(sortedInputVals[i]), sortedInputVals[j]);
      sortedInputVals[i] += transaction;
      sortedInputVals[j] += transaction;
      
      if (sortedInputVals[i] === 0) i++;
      if (sortedInputVals[j] === 0) j--;

      let p = document.createElement("p");
      if (transaction > 0) {
        p.innerText = (`Transfer $${transaction} from ${sortedCat[j]} to ${sortedCat[i]} `);
        div.appendChild(p);
      }
    }
  } 

  render() {
    const categories = ['Bonds', 'Stocks', 'Real_Estate', 'International_Stocks', 'Exotic_Motor_Cars'];
    return (
      <div>
        <h1>Manage My Finances</h1>
        <div className="chart-size">
        <canvas id="myChart" width="400" height="400"></canvas>
        </div>
        <h3>Enter your funds to acheive the ideal portfolio:</h3>
        <TransactionsForm 
          categories={categories}
          handleFormSubmit={this.handleFormSubmit}
        />
 
        <div id="calculate-transactions"></div>
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

