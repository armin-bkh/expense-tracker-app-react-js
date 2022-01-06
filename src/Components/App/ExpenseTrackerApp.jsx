import React, { useEffect, useState } from "react";
import OverView from "../OverView/OverView";
import TransAction from "../TransAction/TransAction";

const ExpenseTrackerApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transAction, setTransAction] = useState([]);
  const [filterTnx, setFilterTnx] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setTransAction(JSON.parse(localStorage.getItem("TransActions")) || []);
  }, []);

  useEffect(() => {
    let exp = 0,
      inc = 0;
    transAction.forEach((traction) =>
      traction.type === "expense"
        ? (exp += parseFloat(traction.amount))
        : (inc += parseFloat(traction.amount))
    );
    setExpense(exp);
    setIncome(inc);
    setFilterTnx(transAction);
    filterTransactionHandler(filter);
    localStorage.setItem("TransActions", JSON.stringify(transAction));
  }, [transAction]);

  const addTransactionsHandler = (formValues) => {
    setTransAction([...transAction, { ...formValues, id: Date.now() }]);
  };

  const deleteTransactionHandler = (id) => {
    setTransAction(transAction.filter((tr) => tr.id !== id));
  };

  const filterTransactionHandler = (selectedOption) => {
    if (selectedOption === "All") {
      setFilterTnx(transAction);
      setFilter("All");
      return;
    }
    const filteredTnx = transAction.filter((tr) => tr.type === selectedOption);
    setFilter(selectedOption);
    setFilterTnx(filteredTnx);
  };

  const searchTransactionHandler = (value) => {
    if (value === "") return filterTransactionHandler(filter);
    const filteredTnx = filterTnx.filter((tr) =>
      tr.desc.toLowerCase().includes(value.toLowerCase())
    );
    setFilterTnx(filteredTnx);
  };

  return (
    <section
      className={
        "bg-violet-400 dark:bg-violet-600 dark:shadow-violet-600/90 p-3 md:p-5 transition-all rounded-xl shadow-2xl shadow-violet-400/90 w-full mx-auto"
      }
    >
      <OverView
        expense={expense}
        income={income}
        addTransactions={addTransactionsHandler}
      />
      <TransAction
        isShow={transAction}
        transActions={filterTnx}
        onDelete={deleteTransactionHandler}
        onSearch={searchTransactionHandler}
        filter={filter}
        onFilter={filterTransactionHandler}
      />
    </section>
  );
};

export default ExpenseTrackerApp;
