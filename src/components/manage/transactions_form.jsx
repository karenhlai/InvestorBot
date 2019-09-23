import React from 'react';
import TextField from '@material-ui/core/TextField';

export const TransactionsForm = ({ categories, handleFormSubmit }) => (
  <form className="form-container" onSubmit={handleFormSubmit}>
    {/* <ThemeProvider> */}
      <TextField
        className="form-input"
        type="number"
        label={categories[0]}
        name={categories[0]}
        variant="outlined"
      />
      <TextField
        className="form-input"
        type="number"
        label={categories[1]}
        name={categories[1]}
        variant="outlined"
      />
      <TextField
        className="form-input"
        type="number"
        label={categories[2]}
        name={categories[2]}
        variant="outlined"
      />
      <TextField
        className="form-input"
        type="number"
        label={categories[3]}
        name={categories[3]}
        variant="outlined"
      />
      <TextField
        className="form-input"
        type="number"
        label={categories[4]}
        name={categories[4]}
        variant="outlined"
      />
    {/* </ThemeProvider> */}
    <input type="submit" value="Submit"></input>
  </form>
);

