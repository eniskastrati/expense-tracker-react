import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function NewExpensesComponent({ ...props }) {
  return (
    <Card className="expenses">
      {props.data.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default NewExpensesComponent;
