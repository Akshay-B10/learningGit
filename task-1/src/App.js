import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_DATA = [{
  id: "12448710",
  date: new Date(2023, 7, 22),
  amount: 10000,
  title: "Mobile",
  location: "Chroma, XYZ Mall"
}, {
  id: "12410025",
  date: new Date(2023, 6, 15),
  amount: 6000,
  title: "Mumbai Ticket",
  location: "Delhi Airport"
}, {
  id: "12456987",
  date: new Date(2022, 8, 29),
  amount: 150,
  title: "Food",
  location: "McD, XYZ City"
}, {
  id: "18972333",
  date: new Date(2021, 9, 1),
  amount: 400,
  title: "Clothing",
  location: "Maxx, Mall"
}];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = expense => {
    setExpenses(expenses => [expense, ...expenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
