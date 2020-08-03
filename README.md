<h3>InvestorBot</h3>

<a href="https://investment-advisor.herokuapp.com/#/">Live Demo</a>

<h3>Background and Overview</h3>
InvestorBot is a robotic investment advisor that was built with React.js / Redux. This frontend application attempts to help its users achieve their ideal financial portfolio by rebalancing their funds. This application was built in a 9 hour time frame, potential features may be added in the future.

<h3>Implementation Technologies and Methods</h3>
- Frontend: React.js, Redux, Javascript
- External Resources: Chart.js (built with D3)

- Buiding an initial state shape for 10 range of portfolios

<h2>To run this project</h2>
- (navigte to desktop in your terminal)
- git clone https://github.com/karenhlai/InvestorBot
- npm run start 
- (navigate to http://localhost:3000/ on your browser)

<h3>Functionality and Features</h3>

- User is presented all portfolio levels and should be able to select a portfolio level
- Upon selection, the user should be able to input their own funds and receive recommendations on how to reblance their funds
- Recommmendations should reflect the minimal number of transactions required to achieve the Ideal Portfolio


<h2>Code Highlights</h2>
<h3>Removing and repopulating data into Chart.js</h3>

```javascript
src/components/portfolios/portfolios_list.jsx

removeData = (chart) => {
  chart.config.data.datasets[0].data = [];
  chart.update();
}

addData = (chart, data) => {
  chart.config.data.datasets[0].data = data;
  chart.update();
}
```
Getting the chart to display the selected portfolio proved to be an intial challange. While the chart library provided a method to accept incoming values to render a chart, it did not listen for changes in percentages when a user navigated between different portfolios. Hence, I defined removeData and addData on top of the given methods to select the data object, and reassign its value to the new portfolio selected. 

![investor_bot_gif](public/assets/images/investor_bot_gif.gif)

UI/UX: 
- Implemented dynamic donut charts from Chart.js 

