import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
// import { fetchPortfolios } from "../../actions/portfolio_actions";
import { increment, decrement } from "../../actions/portfolio_actions";
import Chart from 'chart.js';

class PortfoliosList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: this.props.counter,
      displayPortfolio: this.props.portfolios[this.props.counter - 1],
      chart: null
    }
  }

  componentDidMount() {
    this.getPortfolio();
    this.createChart();
  }

  incrementNumber = async (e) => {
    e.preventDefault();
    const number = this.state.number + 1;
    const displayPortfolio = this.props.portfolios[number-1]; //pId: dec for Idx
    
    if (this.state.number < 10) {
      this.setState({
        number,
        displayPortfolio
      });

      this.props.increment();
      // localStorage.setItem('number', incNum);
      this.getPortfolio();
      await this.removeData(this.state.chart);
      await this.addData(this.state.chart, this.state.displayPortfolio.financial_distribution);
    }
  }

  decrementNumber = async (e) => {
    e.preventDefault();
    const number = this.state.number - 1;
    const displayPortfolio = this.props.portfolios[number-1]; // pId: dec for Idx

    if (this.state.number > 1) {
      this.setState({
        number, 
        displayPortfolio
      });

      this.props.decrement();
      // localStorage.setItem('number', decNum);
      this.getPortfolio();
      await this.removeData(this.state.chart);
      await this.addData(this.state.chart, this.state.displayPortfolio.financial_distribution);
    }
  }

  getPortfolio = () => { 
    const portfolioId = this.state.number - 1; //pId: dec for Idx
    switch (this.props.portfolios) {
      case null:
        return;
      default: 
        const myPortfolioUrl = `/manage/${portfolioId}`;
        return (
          <div className="portfolio-profile-container">
            <div className="portfolio-profile">
              <h3>{this.state.displayPortfolio.portfolio_category}</h3>
              <p>{this.state.displayPortfolio.portfolio_description}</p>
            </div>
            <Link to={myPortfolioUrl}>Manage my Portfolio</Link>
          </div>
        )
    }
  }


  createChart = () => {
    const ctx = document.getElementById('myChart');
    // debugger
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Bonds', 'Stocks', 'Real Estate', 'International Stocks', 'Exotic Motor Cars'],
        datasets: [{
          label: '% of financial distribution',
          data: this.state.displayPortfolio.financial_distribution, 
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
          text: 'Ideal Portfolio',
          fontSize: 15,
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              // let label = data.datasets[tooltipItem.datasetIndex].label || '';
              let label = data.labels[tooltipItem.index];
              let myData = data.datasets[0].data[tooltipItem.index] || '';

              // if (label) {
              //   label += ': ';
              // }

              myData += Math.round(tooltipItem.yLabel * 100) / 100;
              return `% of ${label}: ${myData} %`;
            }
          }
        }, 
      }
    });
    this.setState({ chart: myChart });
  };

  removeData = (chart) => {
    chart.config.data.datasets[0].data = [];
    chart.update();
  }

  addData = (chart, data) => {
    chart.config.data.datasets[0].data = data;
    chart.update();
  }

  render() {
    

    return (
      <div className="portfolio-container">
        <h1>What is your risk temperament?</h1>

        <div className="portfolio-selector">
          <i className="fas fa-chevron-left" onClick={this.decrementNumber}></i>
          <p>{this.state.number}</p>
          <i className="fas fa-chevron-right" onClick={this.incrementNumber}></i>
        </div>


        {/* portfolio profile */}
        {this.getPortfolio()}
        
        <div className="chart-size">
        <canvas id="myChart" width="400" height="400"></canvas>
        </div>
      </div>
    )
  }
};


const mapStateToProps = state => {
  const portfolios = state.portfolios;
  const counter = state.counter;
  return ({
    portfolios,
    counter, 
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchPortfolios: () => dispatch(fetchPortfolios()),
    increment: () => dispatch(increment()), 
    decrement: () => dispatch(decrement())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PortfoliosList);

