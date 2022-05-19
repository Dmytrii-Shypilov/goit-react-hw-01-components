import style from './friend-list.module.css';

import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';


const FriendList = ({friends}) => {
  const elements = friends.map((el) => {
    return <FriendListItem {...el} />
  })
    return (<ul className={style.friendList}>
              {elements}
            </ul>
 )}

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
