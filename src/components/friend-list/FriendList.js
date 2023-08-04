import { FriendListItem } from './FriendListItem';
import { UlFather } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <UlFather>
      <FriendListItem friends={friends} />
    </UlFather>
  );
}
