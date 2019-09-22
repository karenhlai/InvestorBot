import React from "react";
import { connect } from "react-redux";
import { fetchPortfolios, fetchPortfolio } from "../../actions/portfolio_actions";
import Chart from 'chart.js';

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
    this.createChart();
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

  createChart = (pData) =>  {
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Bonds', 'Stocks', 'Real Estate', 'International Stocks', 'Exotic Motor Cars'],
        datasets: [{
          label: '% of financial distribution',
          data: [12, 19, 3, 5, 2],
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
      // options: {
      //   scales: {
      //     yAxes: [{
      //       ticks: {
      //         beginAtZero: true
      //       }
      //     }]
      //   }
      // }
    });
    return (
      myChart
    )
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
        

        <canvas id="myChart" width="400" height="400"></canvas>


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

