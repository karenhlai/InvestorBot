import React from 'react';
import TextField from '@material-ui/core/TextField';

export const TransactionsForm = ({ categories, handleFormSubmit }) => (
  <form className="form-container" onSubmit={handleFormSubmit}>
    { categories.map((category, id) => {
      return (
        // <ThemeProvider>
          <TextField
            className="form-input"
            type="number"
            key={id}
            label={category}
            name={category}
            variant="outlined"
            />
        // </ThemeProvider>
        );
      })
    }
    <input type="submit" value="Rebalance"></input>
  </form>
);

