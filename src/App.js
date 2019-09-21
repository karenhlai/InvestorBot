import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import PortfoliosList from './components/part_1/portfolios_list';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <header>Investment Advisor</header>

        <Switch>
          <Route path="/" component={PortfoliosList} /> 
        </Switch>
      </div>
    )
  }
}

export default App;