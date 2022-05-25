import "./ExpenseItem.css";
import { ExpenseItemProps } from "../../utils";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
/**
 * ExpenseItem component
 *
 * @param {ExpenseItemProps} props
 * @return {*}  {JSX.Element}
 */
const ExpenseItem = (props: ExpenseItemProps): JSX.Element => {
  return (
    <Card className="expense-item">
      <ExpenseDate {...props} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{"$" + props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
