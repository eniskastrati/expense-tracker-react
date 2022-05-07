import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpenses/ExpenseFilter/ExpenseFilter";

function NewExpensesComponent({ ...props }) {
  const [filterdYear, setFilteredYear] = useState("2020");

  const getSelectedYearValue = (yearValue) => {
    setFilteredYear(yearValue);
  };
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterdYear}
          onSelectedYearValue={getSelectedYearValue}
        />
        {props.data.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </>
  );
}

export default NewExpensesComponent;
