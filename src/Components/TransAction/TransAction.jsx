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

  return isShow.length ? (
    <article className={"flex flex-col mt-20"}>
      <div className={`flex items-center mb-7`}>
        <input
          className={
            "flex-1 py-2 rounded-md px-5 outline-none bg-violet-600 shadow-lg shadow-violet-600/50 mr-5 text-violet-200 placeholder:text-violet-400"
          }
          type="text"
          value={search}
          onChange={changeHandler}
          placeholder="search for Tnx..."
        />
        <Select
          options={options}
          onChange={filterChangeHandler}
          value={filter.value}
        />
      </div>
      {transActions.length ? (
        <ul className="grid grid-cols-5 gap-4">
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
        <h5 className={`text-violet-200 text-2xl text-center`}>
          item not found
        </h5>
      )}
    </article>
  ) : (
    <h5 className={`mt-20 text-violet-200 text-2xl text-center`}>
      add some tnx
    </h5>
  );
};

export default TransAction;

const TransActionItem = ({ inf, onDelete }) => {
  return (
    <li
      className={`relative flex flex-col h-32 bg-violet-200 rounded-md shadow-lg shadow-violet-200/50 overflow-hidden`}
    >
      <div className="p-3 flex justify-between items-center">
        <span>{inf.desc}</span>
        <span
          className={`${
            inf.type === "expense" ? "text-red-500" : "text-green-500"
          }`}
        >
          {inf.amount} $
        </span>
      </div>
      <span
        className={`flex justify-center items-center opacity-30 ${
          inf.type === "expense" ? "text-red-600" : "text-green-500"
        }`}
      >
        {inf.type}
      </span>
      <button
        onClick={onDelete}
        className={`w-full flex justify-center text-xl text-violet-200 cursor-pointer ${
          inf.type === "expense" ? "bg-red-500" : "bg-green-500"
        } mt-auto py-3`}
        type="button"
      >
        <BiTrash />
      </button>
    </li>
  );
};
