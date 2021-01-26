import React, { useState } from 'react';

export const useTransactionForm = (initialInputState, callback) => {
  // init state var, set inital var 
  const [inputs, setInputs] = useState(initialInputState);

  // handle onChanges inputs
  const handleInputChange = (e) => {
    e.persist();
    setInputs(inputs => ({
      ...inputs, 
      [e.target.name]: e.target.value
    }));
    console.log(inputs)
  };

  // define handleSubmit
  // it should: preventDefault & call callback
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    // write rebalance callback here
  };

  return { 
    handleInputChange, 
    handleSubmit, 
    inputs
  };
}




