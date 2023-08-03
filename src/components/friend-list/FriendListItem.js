export function FriendListItem(id, avatar, name, isOnline) {
  return (
    <li className="item" key={id}>
      <span className="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}
