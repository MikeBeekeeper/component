
import css from './Transactions.module.css';

const TransactionHistory = (props) => {
    const { children } = props;

    return (
        <table className={css.transaction_history}>
            <thead className={css.head}>
                <tr>
                    <th className={css.head_row}>Type</th>
                    <th className={css.head_row}>Amount</th>
                    <th className={css.head_row}>Currency</th>
                </tr>
            </thead>
            {children}
        </table>
    )

}
export default TransactionHistory;