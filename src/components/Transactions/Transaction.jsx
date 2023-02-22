import PropTypes from 'prop-types';
import css from './Transactions.module.css';


const Transaction = (props) => {
    const { type, amount, currency } = props;
    
    return (
        <>
            <td className={css.table_stroke}>{type}</td>
            <td className={css.table_stroke}>{amount}</td>
            <td className={css.table_stroke}>{currency}</td>
        </>
        
    )
} 


Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}

export default Transaction;