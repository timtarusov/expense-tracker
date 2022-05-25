import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { ExpenseItemProps } from "./utils";

const INITIAL_EXPENSES: ExpenseItemProps[] = [
  {
    id: "e1",
    title: "Jeans Cropped",
    date: new Date(2022, 4, 19),
    amount: 179,
  },
  {
    id: "e2",
    title: "Vacuum Cleaner",
    date: new Date(2022, 4, 19),
    amount: 1199,
  },
  {
    id: "e3",
    title: "Beer and Groceries",
    date: new Date(2022, 4, 20),
    amount: 75.8,
  },
  { id: "e4", title: "Shawerma", date: new Date(2022, 4, 20), amount: 15 },
];
const App = (): JSX.Element => {
  const [expenses, setExpences] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense: ExpenseItemProps) => {
    setExpences((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
};

export default App;
