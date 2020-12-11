import React, {useState, useEffect} from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { increment, decrement } from '../../actions/portfolio_actions';
import Chart from 'chart.js';

const PortfolioIndex = () => {
  //mapStateToProps
  const counter = useSelector(state => state.counter);
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
    
    //update dataset passes props into chart component
    
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

      <div className="portfolio-right">
        <h2>What is your desired financial portfolio?</h2>

        <div className="portfolio-selector">
          <i class="fas fa-chevron-left" onClick={decrementNumber}></i>
          <p>{ counter }</p>
          <i class="fas fa-chevron-right" onClick={incrementNumber}></i>
        </div>

        <p>(Ex. I would like to have 60% of my finances allotted to Bonds)</p>

        {/* { portfolio }  */}

      </div>
    </div>
  )
};

export default PortfolioIndex;
// number is the counter