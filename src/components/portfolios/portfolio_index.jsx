import React, {useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { increment, decrement } from '../../actions/portfolio_actions';
import DonutChart from './chart';

const PortfolioIndex = () => {
  //mapStateToProps
  const counter = useSelector(state => state.counter); //start @ 1, needed for nav persist
  const portfolios = useSelector(state => state.portfolios);

  // mapDispatchToProps: counter, portfolios
  const dispatch = useDispatch();

  // useState hooks
  const [portfolio, setPortfolio] = useState(portfolios[counter - 1]);
  const [count, setCount] = useState(counter);
  
  const decrementNumber = () => {
    if (count > 1) {
      setCount(count - 1);
      setPortfolio(portfolios[count - 1]); //decs based on idx
      dispatch(decrement());
    };
  }

  const incrementNumber = () => {
    if (count < 10) {
      setCount(count + 1);
      setPortfolio(portfolios[count + 1]);
      dispatch(increment());
    };
  }

  return (
    <div className="portfolio-container">
      <DonutChart portfolio={portfolio} />

      <div className="portfolio-right">
        <h2>What is your desired financial portfolio?</h2>

        <div className="portfolio-selector">
          <i className="fas fa-chevron-left" onClick={decrementNumber}></i>
          <p>{ counter }</p>
          <i className="fas fa-chevron-right" onClick={incrementNumber}></i>
        </div>

        <p>(Ex. I would like to have 60% of my finances allotted to Bonds)</p>

        <div className="portfolio-table-container">
          <div className="portfolio-table">
            <h3>{ portfolio.portfolio_category }</h3>
            <p>{ portfolio.portfolio_description }</p>
          </div>
          <Link to={`/manage/${count - 1}`}>Manage my Portfolio</Link>
        </div>
      </div>
    </div>
  )
};

export default PortfolioIndex;