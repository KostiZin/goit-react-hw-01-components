import { List, SpanStatus } from './FriendList.styled';

export function FriendListItem({ friends }) {
  return friends.map(friend => {
    return (
      <List className="item" key={friend.id}>
        <SpanStatus
          className="status"
          $status={friend.isOnline.toString()}
        ></SpanStatus>
        <img
          className="avatar"
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{friend.name}</p>
      </List>
    );
  });
}
