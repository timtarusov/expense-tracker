import { useState } from "react";
import { ExpensesProps } from "../../utils";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

/**
 * Expenses components
 *
 * @param {ExpensesProps} props
 * @return {*}  {JSX.Element}
 */
const Expenses = (props: ExpensesProps): JSX.Element => {
  const [selectedYear, setSelectedYear] = useState("2022");
  const selectedYearHandler = (filteredYear: string): void => {
    setSelectedYear(filteredYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getUTCFullYear() === parseInt(selectedYear);
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          onYearSelect={selectedYearHandler}
          selected={selectedYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
