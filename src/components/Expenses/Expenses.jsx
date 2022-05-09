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
        {filteredExpenses && <p style={{color: "white"}}>No Expenses foung. </p>}
        {filteredExpenses.length > 0 && (
          filteredExpenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })
        )}
      </Card>
    </>
  );
}

export default NewExpensesComponent;
