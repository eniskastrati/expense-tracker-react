import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function NewExpensesComponent({ ...props }) {
  return (
    <div className="expenses">
      {props.data.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </div>
  );
}

export default NewExpensesComponent;
