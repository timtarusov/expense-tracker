import { AddExpenseButtonProps } from "../../utils";

const AddExpenseButton = (props: AddExpenseButtonProps): JSX.Element => {
  const clickAddHandler = () => {
    props.onToggle();
  };

  return <button onClick={clickAddHandler}>Add New Expense</button>;
};

export default AddExpenseButton;
