import { useState } from "react";
import TransActionFrom from "../TransActionForm/TransActionForm";
import styles from "./OverView.module.scss";

const OverView = ({ expense, income, addTransactions }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <article className={styles.balance}>
        <span className="text-violet-200">Balance: {income - expense}</span>
        <button
          className={`px-7 py-2 rounded-md font-bold ${
            !isShow
              ? "bg-violet-200 text-violet-600 shadow-md shadow-violet-200/50"
              : "bg-violet-600 text-violet-200 shadow-md shadow-violet-600/50"
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
      <article className={`flex justify-around items-center`}>
        <div className="flex items-center border-2 border-violet-200 py-14 px-20 rounded-lg shadow-lg shadow-violet-200/70">
          Expense
          <span className="text-red-600 ml-3">{expense} $</span>
        </div>
        <div className="flex items-center border-2 border-violet-200 py-14 px-20 rounded-lg shadow-lg shadow-violet-200/70">
          Income
          <span className="ml-3">{income} $</span>
        </div>
      </article>
    </>
  );
};

export default OverView;
