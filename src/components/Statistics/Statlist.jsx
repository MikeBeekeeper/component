import PropTypes from 'prop-types';
import Stat from './Stat'
import css from './Statistics.module.css';

const Statlist = (props) => {
    const { items } = props;

    return (
        <ul className={css.stat_list}>
            {items.map(item => (
                <li key={item.id} className={css.item}>
                    <Stat
                        label={item.label}
                        percentage={item.percentage}
                    />                   
                </li>
            ))
            }   
        </ul>
    );
}

Statlist.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};

export default Statlist;