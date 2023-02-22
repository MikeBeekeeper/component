import PropTypes from 'prop-types';
import css from './Friendlist.module.css';

const Friend = (props) => {
    const { avatar, name, isOnline } = props;
    
    return (
        <>
            <span className={`${css.status} ${isOnline && css.isonline}`} >{isOnline}</span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </>
    )
}

Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
}

export default Friend;

