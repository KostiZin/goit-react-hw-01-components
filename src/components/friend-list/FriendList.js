import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { List } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <List>
      {friends.map(({ id, isOnline, name, avatar }) => {
        return (
          <FriendListItem
            key={id}
            name={name}
            status={isOnline}
            avatar={avatar}
          />
        );
      })}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
