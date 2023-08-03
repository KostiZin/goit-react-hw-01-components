import { FriendListItem } from './FriendListItem';

import friends from '../data/friends.json';

console.log(friends);

export function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return (
          <FriendListItem
            id={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}
