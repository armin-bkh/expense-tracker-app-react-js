import { useState } from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import TransActionFrom from "../TransActionForm/TransActionForm";

const OverView = ({ expense, income, addTransactions }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <article className={"flex items-center justify-between"}>
        <DarkModeToggle />
        <span className="text-violet-200 dark:text-violet-900 text-2xl font-bold">
          Balance: {income - expense}
        </span>
        <button
          className={`px-7 py-2 rounded-md font-bold transition duration-500 text-sm ${
            !isShow
              ? "bg-violet-200 dark:bg-violet-700 text-violet-600 dark:text-violet-200 shadow-md shadow-violet-200/50 dark:shadow-violet-700/50"
              : "bg-violet-600 dark:bg-violet-800 text-violet-200 shadow-md shadow-violet-600/50 dark:shadow-violet-800/50"
          }`}
          onClick={() => setIsShow((prevIsShow) => !prevIsShow)}
        >
          {isShow ? "Cancel" : "Add"}
        </button>
      </article>
      {isShow && (
        <TransActionFrom
          addTransactions={addTransactions}
          setIsShow={setIsShow}
        />
      )}
      <article
        className={`mt-10 flex flex-col md:flex-row justify-around items-center text-violet-600 dark:text-violet-200`}
      >
        <div className="flex justify-center items-center h-32 w-48 xl:h-36 xl:w-56 rounded-lg shadow-lg shadow-violet-200/70 dark:shadow-violet-700/70 bg-violet-200 dark:bg-violet-700 mb-5 md:mr-3 md:mb-0">
          Expense
          <span className="text-red-600 dark:text-red-400 ml-3">
            {expense} $
          </span>
        </div>
        <div className="flex justify-center items-center h-32 w-48 xl:h-36 xl:w-56 rounded-lg shadow-lg shadow-violet-200/70 dark:shadow-violet-700/70 bg-violet-200 dark:bg-violet-700">
          Income
          <span className="ml-3">{income} $</span>
        </div>
      </article>
    </>
  );
};

export default OverView;
