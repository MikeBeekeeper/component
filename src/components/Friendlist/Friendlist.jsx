import PropTypes from 'prop-types';
import Friend from './Friend';
import css from './Friendlist.module.css';


const Friendlist = (props) => {
    const { items } = props;

    return (
        <ul className={css.friend_list}>
            {items.map(item => (
                <li key={item.id} className={css.item}>
                    <Friend
                        avatar={item.avatar}
                        name={item.name}
                        isOnline={item.isOnline}
                    />
                </li>
            )) }
        </ul>
    )
}

Friendlist.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};

export default Friendlist;