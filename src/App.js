import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import PortfoliosList from './components/portfolios/portfolios_list';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <header>Investment Advisor</header>

        <Switch>
          <Route path="/" component={PortfoliosList} /> 
          {/* <Route path="/manage" component={Transactions} />  */}
        </Switch>
      </div>
    )
  }
}

export default App;