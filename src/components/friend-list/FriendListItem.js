import { List, SpanStatus } from './FriendList.styled';

export function FriendListItem({ friends }) {
  return friends.map(friend => {
    return (
      <List key={friend.id}>
        <SpanStatus $status={friend.isOnline.toString()}></SpanStatus>
        <img src={friend.avatar} alt="User avatar" width="48" />
        <p>{friend.name}</p>
      </List>
    );
  });
}
