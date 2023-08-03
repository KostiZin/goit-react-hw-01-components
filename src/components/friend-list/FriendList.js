import { FriendListItem } from './FriendListItem';

// import friends from '../data/friends.json';

// console.log(friends);

export function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      <FriendListItem friends={friends} />
    </ul>
  );
}
