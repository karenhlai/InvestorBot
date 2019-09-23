import React from 'react';
import { connect } from "react-redux";

export const TransactionsForm = ({ categories, handleFormSubmit }) => (
    <form className="form-container" onSubmit={handleFormSubmit}>
      <label>{categories[0]}
        <input type="number" name={categories[0]} />
      </label>
      <label>{categories[1]}
        <input type="number" name={categories[1]} />
      </label>
      <label>{categories[2]}
       <input type="number" name={categories[2]} />
      </label>
      <label>{categories[3]}
       <input type="number" name={categories[3]} />
      </label>
      <label>{categories[4]}
        <input type="number" name={categories[4]} />
      </label>
      <input type="submit" value="Submit"/>
    </form>
);

