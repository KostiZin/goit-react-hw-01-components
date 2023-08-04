import { Stats } from './ProfileStats';
import {
  MainDiv,
  DivCard,
  MainImg,
  PName,
  PTag,
  PLocation,
} from './Profile.styled';

import user from '../data/user.json';

export function Profile() {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;
  return (
    <MainDiv>
      <DivCard>
        <MainImg src={avatar} alt="User avatar" />
        <PName>{username}</PName>
        <PTag>@{tag}</PTag>
        <PLocation>{location}</PLocation>
      </DivCard>

      <Stats followers={followers} views={views} likes={likes} />
    </MainDiv>
  );
}
