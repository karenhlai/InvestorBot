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
        }, 
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              let label = data.datasets[tooltipItem.datasetIndex].label || '';
              let myData = data.datasets[0].data[tooltipItem.index] || '';

              if (label) {
                label += ': ';
              }

              myData += Math.round(tooltipItem.yLabel * 100) / 100;


              // console.log(tooltipItem)
              return label + myData + '%';
            }
          }
        }
      }
    });
    return (
      myChart
    );
  }

  async handleFormSubmit(e) {
    e.preventDefault();
    document.getElementById("calculate-transactions").innerHTML = "";
    
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

    let inputs = this.state;
    let idealPercentages = {};
    Object.keys(inputs).forEach((category, i) => {
      idealPercentages[category] = this.props.portfolio.financial_distribution[i];
    })
    
    let unbalanced = [];
    let unbalancedCategories = [];
    const total = Object.values(inputs).reduce((acc, curr) => curr + acc);
    const categories = Object.keys(inputs);
    let sortedCategories = categories.sort((cat1, cat2) => inputs[cat1] - inputs[cat2]);

    sortedCategories.forEach((category, i) => {
      let idealPercent = idealPercentages[category];
      let idealValue = (total * idealPercent) / 100;
      let remainingValue = inputs[category] - idealValue;
      if (remainingValue !== 0) {
        unbalanced.push(remainingValue);
        unbalancedCategories.push(sortedCategories[i])
      }
    });

    let i = 0;
    let j = unbalanced.length - 1;

    while (i < j) {
      let currentEl = unbalanced[j];

      let flip = -(currentEl);
      let flipIdx = unbalanced.indexOf(flip);

      if (flipIdx !== -1 && currentEl > 0) { //if flip exists and j is positive
        let roundedVal = Math.round(100 * currentEl) / 100;
        // statements.push(`Transfer $${roundedVal} from ${unbalancedCategories[j]} to ${unbalancedCategories[flipIdx]}`);

        let li = document.createElement("li");
        li.innerText = (`Transfer $${roundedVal} from ${unbalancedCategories[j]} to ${unbalancedCategories[flipIdx]}`);
        div.appendChild(li);

        unbalanced[j] = null;
        unbalanced[flipIdx] = null;
        unbalancedCategories[j] = null; 
        unbalancedCategories[flipIdx] = null;


        unbalanced = unbalanced.filter(el => el !== null);
        unbalancedCategories = unbalancedCategories.filter(el => el !== null);
      } else {
        unbalanced[j - 1] = unbalanced[j - 1] + currentEl;
        let roundedVal = Math.round(100 * currentEl) / 100;
        // statements.push(`Transfer $${roundedVal} from ${unbalancedCategories[j]} to ${unbalancedCategories[j - 1]}`);


        let li = document.createElement("li");
        li.innerText = (`Transfer $${roundedVal} from ${unbalancedCategories[j]} to ${unbalancedCategories[j - 1]}`);
        div.appendChild(li);
      }

      j--;
    }
    if (!div.firstChild) {
      let li = document.createElement("li");
      li.innerText = ('No transactions necessary');
      div.appendChild(li);
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
 
        <h3>Transactions to be made:</h3>
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

