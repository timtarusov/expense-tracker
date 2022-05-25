import React, { useState } from "react";
import { ExpenseItemProps, NewExpenseProps } from "../../utils";
import AddExpenseButton from "./AddExpenseButton";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props: NewExpenseProps): JSX.Element => {
  const [toggleButton, setToggleButton] = useState(true);
  const toggleButtonHandler = () => setToggleButton(!toggleButton);

  const saveExpenseDataHandler = (enteredExpense: ExpenseItemProps) => {
    const expenseData: ExpenseItemProps = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {toggleButton ? (
        <AddExpenseButton onToggle={toggleButtonHandler} />
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onToggle={toggleButtonHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
