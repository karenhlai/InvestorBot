import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchPortfolios, fetchPortfolio } from "../../actions/portfolio_actions";
import Chart from 'chart.js';

class PortfoliosList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 1,
      chart: null
    }

    this.data = [];
  }

  componentDidMount() {
    this.props.fetchPortfolios();
    this.createChart();
    this.getPortfolio(0);
  }


  incrementNumber = (e) => {
    e.preventDefault();
    let incNum = this.state.number;
    
    if (this.state.number < 10) {
      this.setState({
        number: incNum += 1
      });
      this.getPortfolio(incNum);
      // debugger
      this.removeData(this.state.chart);
      this.addData(this.state.chart, this.data);
    }
  }

  decrementNumber = (e) => {
    e.preventDefault();
    let decNum = this.state.number;

    if (this.state.number > 1) {
      this.setState({
        number: decNum -= 1
      });
      this.getPortfolio(decNum);
      // debugger
      this.removeData(this.state.chart);
      this.addData(this.state.chart, this.data);
    }
  }

  getPortfolio = (id) => {
    let portfolioId = this.state.number - 1; //decr. by 1 b/c idx's start at 0;
    switch (this.props.portfolios) {
      case null:
        return;
      default: 
      const displayPortfolio = this.props.portfolios[portfolioId];
        
        this.data = displayPortfolio.financial_distribution;
        const myPortfolioUrl = `/manage/${portfolioId}`;
        return (
          <div className="portfolio-profile-container">
            <div className="portfolio-profile">
              <h3>{displayPortfolio.portfolio_category}</h3>
              <p>{displayPortfolio.portfolio_description}</p>
            </div>
            <Link to={myPortfolioUrl}>Manage my Portfolio</Link>
          </div>
        )
    }
  }


  createChart = () => {
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Bonds', 'Stocks', 'Real Estate', 'International Stocks', 'Exotic Motor Cars'],
        datasets: [{
          label: '% of financial distribution',
          data: [30, 20, 45, 5, 5], 
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
        }
      }
    });

    this.setState({ chart: myChart });
  };

  removeData = (chart) => {
    // debugger
    chart.config.data.datasets[0].data = [];
    // .forEach((dataset) => {
    //   dataset.data = [];
    // });
    chart.update();
  }

  addData = (chart, data) => {
    chart.config.data.datasets[0].data = data;
    // .forEach((dataset) => {
    //   dataset.data.push(data);
    // });
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

