import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpenses/ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";

function NewExpensesComponent({ ...props }) {
  const [filterdYear, setFilteredYear] = useState("2020");

  const getSelectedYearValue = (yearValue) => {
    setFilteredYear(yearValue);
  };

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  let expenseContent = <p style={{color: "white"}}>No Expenses foung. </p>;

  if(filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    })
  }

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterdYear}
          onSelectedYearValue={getSelectedYearValue}
        />
        <ExpensesList data={filteredExpenses}/>
      </Card>
    </>
  );
}

export default NewExpensesComponent;
