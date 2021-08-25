import { useEffect, useState } from "react";
import { BiTrash } from 'react-icons/bi';
import styles from "./TransAction.module.scss";
import Select from 'react-select';

const options = [
    {label: "All", value: "All"},
    {label: "Expenses", value: "expense"},
    {label: "Incomes", value: "income"},
]

const TransAction = ({ transActions, onDelete, onFilter, onSearch , filter, isShow }) => {
  const [search, setSearch] = useState("");

  const changeHandler = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  const filterChangeHandler = (selectedOption) => {
    onFilter(selectedOption.value);
  }


  return (

    isShow.length ? 
    <article className={styles.TransActionContainer}>
      <div className={styles.filterContainer}>
        <input className={styles.searchBox} type="text" value={search} onChange={changeHandler} placeholder="search for Tnx..." />
        <Select className={styles.filterBox} options={options}  onChange={filterChangeHandler} value={filter.value} />
      </div>
      {
      transActions.length ? (
        <ul>
          {transActions.map((traction) => (
            <TransActionItem
              className={styles.tractionItem}
              inf={traction}
              key={traction.id}
              onDelete={()=> onDelete(traction.id)}
            />
          ))}
        </ul>
      ) :  
      <h5 className={styles.meesage}>item not found</h5>
      }
    </article> : <h5 className={styles.meesage}>add some tnx</h5>
  );
};

export default TransAction;

const TransActionItem = ({ inf, onDelete }) => {
  return (
    <li
      className={styles.tractionItem}
      style={{ borderRight: inf.type === "expense" && "4px solid #ff0000" }}
    >
      <span>{inf.desc}</span>
      <button onClick={onDelete} className={styles.tractionBtn} type="button">
          <BiTrash />
      </button>
      <span>{inf.amount} $</span>
    </li>
  );
};
