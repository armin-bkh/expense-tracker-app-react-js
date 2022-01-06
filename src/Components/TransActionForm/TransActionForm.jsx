import { useEffect, useRef, useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

const TransActionFrom = ({ addTransactions, setIsShow }) => {
  const [formValues, setFormValues] = useState({
    desc: "",
    amount: "",
    type: "expense",
  });
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (formValues.desc.length && formValues.amount.length) {
      addTransactions(formValues);
      setFormValues({
        desc: "",
        amount: "",
        type: "expense",
      });
      setIsShow(false);
    } else inputRef.current.focus();
  };
  return (
    <form
      onSubmit={submitHandler}
      className={`flex flex-col py-10 px-2 md:px-5`}
    >
      <fieldset className="mb-5">
        <input
          ref={inputRef}
          type="number"
          name="amount"
          placeholder="Amount"
          value={formValues.amount}
          onChange={changeHandler}
          className="block w-full mb-5 focus:outline-none border-none rounded-sm px-3 py-2 bg-violet-200 dark:bg-violet-700 shadow-md shadow-violet-200/50 dark:shadow-violet-700/50 text-violet-600 placeholder:text-violet-400 dark:text-violet-200"
        />
        <input
          type="text"
          name="desc"
          placeholder="Description"
          value={formValues.desc}
          onChange={changeHandler}
          className="block w-full focus:outline-none border-none rounded-sm px-3 py-2 bg-violet-200 dark:bg-violet-700 shadow-md shadow-violet-200/50 dark:shadow-violet-700/50 text-violet-600 placeholder:text-violet-400 dark:text-violet-200"
        />
      </fieldset>
      <fieldset className={`mb-7 flex`}>
        <label
          htmlFor="ExpenseRD"
          className={`flex items-center px-5 py-2 mr-5 rounded-md transition duration-500 cursor-pointer shadow-lg text-sm font-bold ${
            formValues.type === "expense"
              ? "bg-violet-600 dark:bg-violet-200 text-violet-200 dark:text-violet-700 shadow-violet-600/50 dark:shadow-violet-200/50"
              : "bg-violet-200 dark:bg-violet-700 text-violet-600 dark:text-violet-200 shadow-violet-200/50 dark:shadow-violet-700/50"
          }`}
        >
          <input
            type="radio"
            value="expense"
            checked={formValues.type === "expense"}
            name="type"
            id="ExpenseRD"
            onChange={changeHandler}
            className="sr-only"
          />
          <span
            className={`flex items-center justify-center w-4 h-4 rounded-sm border ${
              formValues.type === "expense"
                ? "border-violet-200"
                : "border-violet-600"
            } mr-3`}
          >
            {formValues.type === "expense" && <IoCheckmarkSharp />}
          </span>
          <span>Expense</span>
        </label>
        <label
          htmlFor="IncomeRD"
          className={`flex items-center px-5 py-2 rounded-md transition duration-500 cursor-pointer shadow-lg text-sm font-bold ${
            formValues.type === "income"
              ? "bg-violet-600 dark:bg-violet-200 text-violet-200 dark:text-violet-700 shadow-violet-600/50 dark:shadow-violet-200/50"
              : "bg-violet-200 dark:bg-violet-700 text-violet-600 dark:text-violet-200 shadow-violet-200/50 dark:shadow-violet-700/50"
          }`}
        >
          <input
            type="radio"
            value="income"
            checked={formValues.type === "income"}
            name="type"
            id="IncomeRD"
            onChange={changeHandler}
            className="sr-only"
          />
          <span
            className={`flex items-center justify-center w-4 h-4 rounded-sm border ${
              formValues.type === "income"
                ? "border-violet-200"
                : "border-violet-600"
            }  mr-3`}
          >
            {formValues.type === "income" && <IoCheckmarkSharp />}
          </span>
          <span>Income</span>
        </label>
      </fieldset>
      <button
        className={`bg-violet-200 text-sm font-bold hover:dark:bg-violet-700 text-violet-600 hover:bg-violet-600 hover:text-violet-200 transition duration-500 py-2 rounded-md`}
        type="submit"
      >
        Transaction
      </button>
    </form>
  );
};

export default TransActionFrom;
