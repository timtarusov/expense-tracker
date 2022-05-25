import React, { BaseSyntheticEvent, useState } from "react";
import { ExpenseFormProps, ExpenseItemProps } from "../../utils";
import "./ExpenseForm.css";

const ExpenseForm = (props: ExpenseFormProps): JSX.Element => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event: BaseSyntheticEvent): void => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event: BaseSyntheticEvent): void => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event: BaseSyntheticEvent): void => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event: BaseSyntheticEvent): void => {
    event.preventDefault();
    const expenseData: ExpenseItemProps = {
      title: enteredTitle,
      amount: parseFloat(enteredAmount),
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onToggle();
  };

  const cancelHandler = (): void => {
    props.onToggle();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
