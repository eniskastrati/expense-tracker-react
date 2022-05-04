import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm() {
  const [enteredTitile, setEnterdTitle] = useState('');
  const [enteredAmount, setEnterdAmount] = useState('');
  const [enteredDate, setEnterdDate] = useState('');
  const changeHandler = (e) => {
    e.preventDefault();
    setEnterdTitle(e.target.value);
    setEnterdAmount(e.target.value);
    setEnterdDate(e.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" onChange={changeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={changeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input type="date" min="2019-01-01" max="2022-12-13" onChange={changeHandler}/>
        </div>
      </div>
      <div className="new-expense__acitons">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
