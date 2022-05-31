import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpenses/ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function NewExpensesComponent({ ...props }) {
  const [filterdYear, setFilteredYear] = useState("2020");

  const getSelectedYearValue = (yearValue) => {
    setFilteredYear(yearValue);
  };

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterdYear}
          onSelectedYearValue={getSelectedYearValue}
        />
        <ExpensesChart expense={filteredExpenses} />
        <ExpensesList data={filteredExpenses} />
      </Card>
    </>
  );
}

export default NewExpensesComponent;
