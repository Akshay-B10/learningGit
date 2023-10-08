import React, { useState } from "react";

import Card from "./components/UI/Card";
import ExpenseItem from "./components/Expense/ExpenseItem";
import ExpenseForm from "./components/ExpenseForm";
import "./App.css";
import ExpensesFilter from "./components/Expense/ExpensesFilter";

const App = () => {
  const expenses = [{
    date: new Date(2023, 8, 29),
    amount: 150,
    description: "Food",
    location: "McD, XYZ City"
  }, {
    date: new Date(2023, 9, 1),
    amount: 400,
    description: "Clothing",
    location: "Maxx, Mall"
  }];

  const [filterYear, setFilterYear] = useState("2021");

  const addExpenseHandler = expenseData => {
    console.log("in app");
    console.log({ ...expenseData });
  }

  const filterYearHandler = selectedYear => {
    setFilterYear(selectedYear);
  }

  return (
    <div>
      {/* <h2>Expense Tracker</h2> */}
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onFilterYear={filterYearHandler} />
        <ExpenseItem
          date={expenses[0].date}
          amount={expenses[0].amount}
          description={expenses[0].description}
          location={expenses[0].location} />
        <ExpenseItem
          date={expenses[1].date}
          amount={expenses[1].amount}
          description={expenses[1].description}
          location={expenses[1].location} />
      </Card>
    </div>
  );
}

export default App;
