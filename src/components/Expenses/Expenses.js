import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../Filters/ExpensesFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const saveSelectedYearHandler = (selectedFilterYear) => {
    setFilterYear(selectedFilterYear);
  };
  let expenses = props.expenses;
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          addSelectedFilterYear={saveSelectedYearHandler}
        />
        <ExpenseItem
          title={expenses[0].title}
          date={expenses[0].date}
          amount={expenses[0].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          date={expenses[1].date}
          amount={expenses[1].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          date={expenses[2].date}
          amount={expenses[2].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[3].title}
          date={expenses[3].date}
          amount={expenses[3].amount}
        ></ExpenseItem>
      </Card>
    </div>
  );
};
export default Expenses;
