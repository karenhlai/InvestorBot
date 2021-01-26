import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useTransactionForm } from '../../CustomHooks';

export const TransactionForm = () => {
  const initialInputState = {
      "Bonds": null, 
      "Stocks": null, 
      "Real Estate": null, 
      "International Stocks": null, 
      "Exotic Motor Cars": null
    };

  const rebalanceCallback = () => {
    console.log("Youve hit the reblance callback")
  }

  // destructure obj that is returned to us by hook
  const {inputs, handleInputChange, handleSubmit} = useTransactionForm(initialInputState, rebalanceCallback);
  
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      { Object.keys(inputs).map((category, id) => {
        return (
          <TextField
          className="form-input"
          type="number"
          key={id}
          label={category}
          name={category}
          variant="outlined"
          onChange={handleInputChange}
          />
          );
        })
      }
      <input type="submit" value="Rebalance"></input>
    </form>
  )
}