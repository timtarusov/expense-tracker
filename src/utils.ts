import React from "react";

export interface ExpenseItemProps {
  id?: string;
  date: Date;
  title: string;
  amount: number;
}
/**
 * ExpensesProps interface
 *
 * @export
 * @interface ExpensesProps
 */
export interface ExpensesProps {
  expenses: ExpenseItemProps[];
}

export interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

export interface ExpenseFormProps {
  onSaveExpenseData: (enteredExpense: ExpenseItemProps) => void;
  onToggle: () => void;
}

export interface NewExpenseProps {
  onAddExpense: (newExpense: ExpenseItemProps) => void;
  // onToggleButton: () => void;
}

export interface ExpenseFilterProps {
  onYearSelect: (year: string) => void;
  selected: string;
}

export interface AddExpenseButtonProps {
  onToggle: () => void;
}
