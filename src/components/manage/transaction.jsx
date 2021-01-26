import React, {useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Chart from 'chart.js';
import { TransactionForm } from './transaction_form';
import { useTransactionForm } from '../../CustomHooks';

const Transaction = (props) => {
  // mapStateToProps 
  // Was previously using React-Redux Router to get portfolioId from ownProps
  const portfolio = useSelector(state => state.portfolios[props.match.params.id]);
  
  // IDEA/TODO: remove when new feature allows user to create/select their own categories
  const categories = ['Bonds', 'Stocks', 'Real_Estate', 'International_Stocks', 'Exotic_Motor_Cars'];

  useEffect(() => {
    function instantiateStaticChart() {
      const ctx = document.getElementById('myChart');
      const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: categories,
        datasets: [{
          label: '% of financial distribution',
          data: portfolio.financial_distribution,
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        animation: {
          animateScale: true
        },
        title: {
          display: true,
          text: 'Ideal Portfolio',
          fontSize: 18,
          fontColor: '#E0EAEE'
        },
        legend: {
          labels: {
            fontColor: '#E0EAEE',
            fontSize: 16
          }
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              let label = data.datasets[tooltipItem.datasetIndex].label || '';
              let myData = data.datasets[0].data[tooltipItem.index] || '';
              if (label) label += ': ';
              myData += Math.round(tooltipItem.yLabel * 100) / 100;
              return label + myData + '%';
            }
          }
        }
      }
    });
  };
  instantiateStaticChart();
  }, [portfolio.id]);
  
  return (
    <div className="transactions-container">
      <Link to={'/portfolios'}>Return to Portfolios </Link>
      <h1>Manage My Finances</h1>
      <div className="chart-size" id="my-chart-size">
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>

      <h3>Enter your funds to acheive the ideal portfolio:</h3>
      <TransactionForm
        categories={categories}
      />

      <h3>Transactions to be made:</h3>
        <div id="calculate-transactions"></div>
    </div>
  )
}

export default Transaction;