import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PortfoliosList from './components/portfolios/portfolios_list';
import Transactions from './components/manage/transactions';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <header>Robotic Investment Advisor</header>

        <Switch>
          <Route exact path="/" component={PortfoliosList} /> 
          <Route path="/manage/:id" component={Transactions} /> 
        </Switch>
      </div>
    )
  }
}

export default App;