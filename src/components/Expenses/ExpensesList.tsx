import { ExpensesProps } from "../../utils";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props: ExpensesProps): JSX.Element => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.expenses.map((ei) => {
        return <ExpenseItem {...ei} key={ei.id} />;
      })}
    </ul>
  );
};

export default ExpensesList;
