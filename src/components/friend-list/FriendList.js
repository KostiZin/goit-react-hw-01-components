import { FriendListItem } from './FriendListItem';
import { UlFather } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <UlFather className="friend-list">
      <FriendListItem friends={friends} />
    </UlFather>
  );
}
