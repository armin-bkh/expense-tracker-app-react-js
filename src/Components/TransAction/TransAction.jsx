import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import styles from "./TransAction.module.scss";
import Select from "react-select";

const options = [
  { label: "All", value: "All" },
  { label: "Expenses", value: "expense" },
  { label: "Incomes", value: "income" },
];

const TransAction = ({
  transActions,
  onDelete,
  onFilter,
  onSearch,
  filter,
  isShow,
}) => {
  const [search, setSearch] = useState("");

  const changeHandler = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  const filterChangeHandler = (selectedOption) => {
    onFilter(selectedOption.value);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 20,
    }),
    control: (provided) => ({
      ...provided,
      background: "#ede9fe",
      outline: "none",
      minWidth: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...provided, opacity, transition };
    },
  };

  return isShow.length ? (
    <article className={"flex flex-col mt-20"}>
      <div className={`flex flex-col lg:flex-row mb-7`}>
        <input
          className={
            "flex-1 py-2 rounded-md px-5 outline-none bg-violet-600 dark:bg-violet-200 dark:shadow-violet-200/50 dark:text-violet-700 shadow-lg shadow-violet-600/50 text-violet-200 lg:mr-5 placeholder:text-violet-400 mb-3"
          }
          type="text"
          value={search}
          onChange={changeHandler}
          placeholder="search for Tnx..."
        />
        <Select
          styles={customStyles}
          options={options}
          onChange={filterChangeHandler}
          value={filter.value}
        />
      </div>
      {transActions.length ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {transActions.map((traction) => (
            <TransActionItem
              className={styles.tractionItem}
              inf={traction}
              key={traction.id}
              onDelete={() => onDelete(traction.id)}
            />
          ))}
        </ul>
      ) : (
        <h5 className={`text-violet-200 text-lg lg:text-2xl text-center`}>
          item not found
        </h5>
      )}
    </article>
  ) : (
    <h5 className={`mt-20 text-violet-200 text-lg lg:text-2xl text-center`}>
      add some tnx
    </h5>
  );
};

export default TransAction;

const TransActionItem = ({ inf, onDelete }) => {
  return (
    <li
      className={`relative flex flex-col h-32 bg-violet-200 dark:bg-violet-700 rounded-md shadow-lg shadow-violet-200/50 dark:shadow-violet-700/50 overflow-hidden`}
    >
      <div className="p-3 flex justify-between items-center">
        <span className="text-violet-600 dark:text-violet-200">{inf.desc}</span>
        <span
          className={`${
            inf.type === "expense"
              ? "text-red-500 dark:text-red-400"
              : "text-green-500"
          }`}
        >
          {inf.amount} $
        </span>
      </div>
      <span
        className={`flex justify-center items-center opacity-30 ${
          inf.type === "expense"
            ? "text-red-600 dark:text-red-400"
            : "text-green-500"
        }`}
      >
        {inf.type}
      </span>
      <button
        onClick={onDelete}
        className={`w-full flex justify-center text-xl text-violet-200 cursor-pointer ${
          inf.type === "expense" ? "bg-red-500 dark:bg-red-400" : "bg-green-500"
        } mt-auto py-3`}
        type="button"
      >
        <BiTrash />
      </button>
    </li>
  );
};
