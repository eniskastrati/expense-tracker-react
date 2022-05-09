import React from "react";
import "./ExpensesList.css";
import ExpenseItem from './ExpenseItem'

function ExpensesList(props) {
  let expenseContent = <p style={{ color: "white" }}>No Expenses foung. </p>;

  if (props.data.length > 0) {
    expenseContent = props.data.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return <ul className="expenses-list">
      
  </ul>;
}

export default ExpensesList;
