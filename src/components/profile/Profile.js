import PropTypes from 'prop-types';

import {
  MainDiv,
  DivCard,
  Img,
  PName,
  PTag,
  PLocation,
  ListItem,
  List,
  ListSpan,
} from './Profile.styled';

export function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <MainDiv>
      <DivCard>
        <Img src={avatar} alt="User avatar" />
        <PName>{username}</PName>
        <PTag>@{tag}</PTag>
        <PLocation>{location}</PLocation>
      </DivCard>
      <List>
        <ListItem>
          <ListSpan>Followers </ListSpan>
          <span>{followers}</span>
        </ListItem>
        <ListItem>
          <ListSpan>Views </ListSpan>
          <span>{views}</span>
        </ListItem>
        <ListItem>
          <ListSpan>Likes </ListSpan>
          <span>{likes}</span>
        </ListItem>
      </List>
    </MainDiv>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  // stats: PropTypes.object,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
