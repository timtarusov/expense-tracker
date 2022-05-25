import React, { BaseSyntheticEvent } from "react";
import { ExpenseFilterProps } from "../../utils";

import "./ExpensesFilter.css";

const ExpensesFilter = (props: ExpenseFilterProps) => {
  const selectYearHandler = (event: BaseSyntheticEvent) => {
    props.onYearSelect(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectYearHandler} value={props.selected}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
