import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Stat = (props) => {
    const {label, percentage } = props;

    return (
        <>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </>
    )

}

Stat.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
}

export default Stat;