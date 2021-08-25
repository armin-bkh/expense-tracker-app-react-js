import { useEffect, useRef, useState } from "react";
import styles from './TransActionForm.module.scss';

const TransActionFrom = ({ addTransactions, setIsShow }) => {
    const [formValues, setFormValues] = useState({
        desc: '',
        amount: '',
        type: 'expense',
    });
    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
    }, [])

    const changeHandler = (e) =>{
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if(formValues.desc.length && formValues.amount.length){
        addTransactions(formValues);
        setFormValues({
            desc: '',
            amount: '',
            type: 'expense'
        })
        setIsShow(false);
    } else inputRef.current.focus();
    }
    return ( 
        <form onSubmit={submitHandler} className={styles.formContainer}>
            <fieldset className={styles.inputGroup}>
                <input ref={inputRef} type="number" name="amount" placeholder="Amount" value={formValues.amount} onChange={changeHandler} />
                <input type="text" name="desc" placeholder="Description" value={formValues.desc} onChange={changeHandler} />
            </fieldset>
            <fieldset className={styles.inputGroup}>
                <input type="radio" value="expense" checked={formValues.type === "expense"} name="type" id="ExpenseRD" onChange={changeHandler} />
                <label htmlFor="ExpenseRD">Expense</label>
                <input type="radio" value="income" checked={formValues.type === "income"} name="type" id="IncomeRD" onChange={changeHandler}/>
                <label htmlFor="IncomeRD">Income</label>
            </fieldset>
            <button type="submit">Transaction</button>
        </form>
     );
}
 
export default TransActionFrom;