import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/nav/nav';
import Splash from './components/splash/splash';
import Transactions from './components/manage/transactions';
import PortfolioIndex from './components/portfolios/portfolio_index';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Nav />
    
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/portfolios" component={PortfolioIndex} /> 
          <Route path="/manage/:id" component={Transactions} /> 
        </Switch>
      </div>
    )
  }
}

export default App;