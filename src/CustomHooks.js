import { useState } from 'react';

export const useTransactionForm = (initialInputState, rebalanceCallback) => {
  // init state var, set inital var 
  const [inputs, setInputs] = useState(initialInputState);

  // handle onChanges inputs
  // it should: 
  const handleInputChange = (e) => {
    e.persist();
    setInputs(inputs => ({
      ...inputs, 
      [e.target.name]: e.target.value
    }));
  };

  // define handleSubmit
  // it should: preventDefault & call callback
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    // call rebalance callback here
    // console.log(inputs)
    rebalanceCallback();
  };

  return { 
    handleInputChange, 
    handleSubmit, 
    inputs
  };
}




