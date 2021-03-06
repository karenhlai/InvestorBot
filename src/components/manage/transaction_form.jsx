import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useTransactionForm } from '../../CustomHooks';

export const TransactionForm = ({ portfolio }) => {
  
  const initialInputState = {
      "Bonds": 0, 
      "Stocks": 0, 
      "Real Estate": 0, 
      "International Stocks": 0, 
      "Exotic Motor Cars": 0
    };

  // greedy
  const rebalanceCallback = () => {
    const categories = Object.keys(inputs);
    
    const ul = document.getElementById("transactions");
    clearAllTransactions(ul);

    const inputAmounts = Object.values(inputs).map(input => parseFloat(input));
    const idealAmounts = getIdealDistribution(portfolio.financial_distribution, inputAmounts);
    
    let owed = inputAmounts.map((val, idx) => val - idealAmounts[idx]);
    let empty = owed.filter(val => val !== 0);
    
    while (empty.length > 0) {
      let minVal = getMinVal(owed);
      let maxVal = getMaxVal(owed);

      const remaining = minVal + maxVal;
      let payout;

      // IDEA/TODO: when users can enter their own categories, remove idxing and map to category instead
      const minIdx = owed.indexOf(minVal);
      const maxIdx = owed.indexOf(maxVal);
 
      if (remaining === 0) {  // both are settled
        payout = Math.abs(minVal);
        owed[maxIdx] = 0;
        owed[minIdx] = 0;
      } else if (remaining < 0) { // if negative, maxVal is 0 (nothing to pay out) and minVal is still owed
        payout = Math.abs(maxVal);
        owed[minIdx] = remaining;
        owed[maxIdx] = 0;
      } else if (remaining > 0) { // if positive,  minVal is 0 (settled) and maxVal still has money to pay out
        payout = Math.abs(minVal);
        owed[minIdx] = 0;
        owed[maxIdx] = remaining;
      };

      const li = document.createElement("li");
      li.innerText = (`Transfer ${payout} from ${categories[maxIdx]} to ${categories[minIdx]}`);
      ul.appendChild(li);

      empty = owed.filter(val => val !== 0);
    }
  }

  const getMinVal = (arr) => Math.min(...arr);
  const getMaxVal = (arr) => Math.max(...arr);

  const getIdealDistribution = (percentages, unbalancedInputs) => {
    const sum = unbalancedInputs.reduce((acc, amount) => acc + amount);
    return percentages.map(percent => sum * (percent / 100)); 
  }

  const clearAllTransactions = parent => {
    while(parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  const roundToNearestCents = num => Math.ceil(num * 100) / 100;

  // destructure obj that is returned to us by hook
  const {inputs, handleInputChange, handleSubmit} = useTransactionForm(initialInputState, rebalanceCallback);
  
  return (
    <div>
      <h3>Enter your funds to acheive the ideal portfolio:</h3>

      <form className="form-container" onSubmit={handleSubmit}>
        { Object.keys(inputs).map((category, id) => {
          return (
            <TextField
            onChange={handleInputChange}
            className="form-input"
            type="number"
            key={id}
            label={category}
            name={category}
            variant="outlined"
            />
            );
          })
        }
        <input type="submit" value="Rebalance"></input>
      </form>

      <h3>Transactions to be made:</h3>
      <ul id="transactions"></ul>
    </div>
  )
}