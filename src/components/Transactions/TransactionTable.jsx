import PropTypes from 'prop-types';

import Transaction from './Transaction';
import css from './Transactions.module.css';

const TransactionTable = (props) => {
    const { items } = props;
    
    return (
        <tbody>
            {items.map(item => (
                <tr key={item.id} className={css.table_raw}>
                    <Transaction
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                    />

                </tr>

            ))}
        </tbody>
    )

}

TransactionTable.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    )
}

export default TransactionTable;