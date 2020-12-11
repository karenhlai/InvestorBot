import React, {useState, useEffect, useRef} from 'react';
import Chart from 'chart.js';

const DonutChart = ({ portfolio }) => {
  console.log(portfolio)
  const chartContainer = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chart(chartContainer.current, {
        type: 'doughnut',
        data: {
          labels: ['Bonds', 'Stocks', 'Real Estate', 'International Stocks', 'Exotic Motor Cars'],
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
                let label = data.labels[tooltipItem.index];
                let myData = data.datasets[0].data[tooltipItem.index] || '';
                myData += Math.round(tooltipItem.yLabel * 100) / 100;
                return `% of ${label}: ${myData} %`;
              }
            }
          }, 
        }
      });
      setChart(newChartInstance);
      
    }
  }, [chartContainer]);

  const updateData = (count, data) => {
    chart.config.data.datasets[0].data = data;
    chart.update();
  }
    
  return (
    <div className="chart-size portfolio-left">
      <canvas ref={chartContainer} id="myChart" width="400" height="400"></canvas>
    </div>
  )
}

export default DonutChart;

// call .update() somewhere
// fix counter