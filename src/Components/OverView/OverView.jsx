import { useState } from "react";
import TransActionFrom from "../TransActionForm/TransActionForm";
import styles from './OverView.module.scss';

const OverView = ({ expense, income, addTransactions }) => {
    const [isShow, setIsShow] = useState(false);

    return ( 
        <>
            <article className={styles.balance}>
                <span>Balance: {expense - income}</span>
                <button className={`${styles.btn} ${isShow && styles.cancel}`} onClick={() => setIsShow(prevIsShow => !prevIsShow)}>
                    {isShow ? "Cancel" : "Add"}
                </button>
            </article>
            {isShow && <TransActionFrom addTransactions={addTransactions} setIsShow={setIsShow} />}
            <article className={styles.sumation}>
                <div>
                    Expense
                    <span style={{color: '#ff0000'}}>
                        {expense} $
                    </span>
                </div>
                <div>
                    Income
                    <span>  
                        {income} $
                    </span>
                </div>
            </article>
        </>
     );
}
 
export default OverView;