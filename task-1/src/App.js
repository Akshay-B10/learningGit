import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_DATA = [{
  id: Math.random().toString(),
  date: new Date(2023, 8, 29),
  amount: 150,
  title: "Food",
  location: "McD, XYZ City"
}, {
  id: Math.random().toString(),
  date: new Date(2023, 9, 1),
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
