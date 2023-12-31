import PropTypes from 'prop-types';

import { ListItem, SpanStatus } from './FriendList.styled';

export function FriendListItem({ name, status, avatar }) {
  return (
    <ListItem>
      <SpanStatus $status={status}></SpanStatus>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </ListItem>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
