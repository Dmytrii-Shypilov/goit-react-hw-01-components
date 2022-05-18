import style from './friendList.module.css';

import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  const friendsItem = friends.map(el => {
    const className = el.isOnline ? `${style.status}` : `${style.offline}`;
    return (
      <li className={style.item} key={el.id}>
        <span className={className}></span>
        <img
          className={style.avatar}
          src={el.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={style.name}>{el.name}</p>
      </li>
    );
  });

  return <ul className={style.friendList}>{friendsItem}</ul>;
};

export default FriendList;

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
