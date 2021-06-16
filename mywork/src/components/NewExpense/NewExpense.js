import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const [showButton, setShowButton] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    props.onGetExpenseData(expenseData);
    setShowButton(false);
  };
  const newExpenseAddEventHandler = () => {
    setShowButton(true);
  };
  const stopShowing = (clicked) => {
    setShowButton(false);
  };

  return (
    <div className="new-expense">
      {!showButton && (
        <button onClick={newExpenseAddEventHandler}>Add New Expense</button>
      )}
      {showButton && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopShowing}
        />
      )}
    </div>
  );
}

export default NewExpense;
