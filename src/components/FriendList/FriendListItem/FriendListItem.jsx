import style from './friend-list-item.module.css';

import PropTypes from 'prop-types';

const FriendListItem = ({ id, name, avatar, isOnline }) => {
  const className = isOnline ? `${style.status}` : `${style.offline}`;
  return (
    <li className={style.item} key={id}>
      <span className={className}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
