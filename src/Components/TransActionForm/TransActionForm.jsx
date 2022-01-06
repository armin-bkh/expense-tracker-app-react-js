import Input from "../Common/Input/Input";
import { useEffect, useRef, useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import RadioBox from "../Common/RadioBox/RadioBox";

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
        <Input
          ref={inputRef}
          type="number"
          name="amount"
          placeholder="Amount"
          value={formValues.amount}
          onChange={changeHandler}
        />
        <Input
          type="text"
          name="desc"
          placeholder="Description"
          value={formValues.desc}
          onChange={changeHandler}
        />
      </fieldset>
      <fieldset className={`mb-7 flex`}>
        <RadioBox
          id="ExpenseRD"
          value="expense"
          checked={formValues.type === "expense"}
          onChange={changeHandler}
          name="type"
        />
        <RadioBox
          id="IncomeRD"
          value="income"
          checked={formValues.type === "income"}
          onChange={changeHandler}
          name="type"
        />
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
