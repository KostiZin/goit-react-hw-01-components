import { Stats } from './ProfileStats';
import { MainDiv, DivCard, MainImg } from './Profile.styled';

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
    <MainDiv className="profile">
      <DivCard className="description">
        <MainImg src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </DivCard>

      <Stats followers={followers} views={views} likes={likes} />
    </MainDiv>
  );
}
