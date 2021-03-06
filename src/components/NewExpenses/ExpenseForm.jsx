import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitile, setEnterdTitle] = useState("");
  const [enteredAmount, setEnterdAmount] = useState("");
  const [enteredDate, setEnterdDate] = useState("");
  const [showForm, setShowForm] = useState(false);
  const maxDateValue = `${new Date().getFullYear().toString()}-12-13`;
  const changeHandlerOne = (e) => {
    e.preventDefault();
    setEnterdTitle(e.target.value);
  };
  const changeHandlerTwo = (e) => {
    e.preventDefault();
    setEnterdAmount(e.target.value);
  };
  const changeHandlerThree = (e) => {
    e.preventDefault();
    setEnterdDate(e.target.value);
  };
  const submitHandler = (payload) => {
    payload.preventDefault();

    const expenseData = {
      title: enteredTitile,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    resetHandle();
    setShowForm(false);
  };
  const resetHandle = () => {
    setEnterdTitle("");
    setEnterdAmount("");
    setEnterdDate("");
  };
  return (
    <form onSubmit={submitHandler} onReset={resetHandle}>
      {showForm ? (
        <>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                value={enteredTitile}
                onChange={changeHandlerOne}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={changeHandlerTwo}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                min="2019-01-01"
                max={maxDateValue}
                value={enteredDate}
                onChange={changeHandlerThree}
              />
            </div>
          </div>
          <div className="new-expense__acitons">
            <button type="reset" onClick={() => setShowForm(false)}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </>
      ) : (
        <div className="new-expense__acitons">
          <button onClick={() => setShowForm(true)}>Add New Expense</button>
        </div>
      )}
    </form>
  );
}

export default ExpenseForm;
