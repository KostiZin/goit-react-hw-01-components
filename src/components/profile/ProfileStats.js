import { ListStats, UlFatherStats, ListSpan } from './Profile.styled';

export function Stats({ followers, views, likes }) {
  return (
    <UlFatherStats>
      <ListStats>
        <ListSpan>Followers </ListSpan>
        <span>{followers}</span>
      </ListStats>
      <ListStats>
        <ListSpan>Views </ListSpan>
        <span>{views}</span>
      </ListStats>
      <ListStats>
        <ListSpan>Likes </ListSpan>
        <span>{likes}</span>
      </ListStats>
    </UlFatherStats>
  );
}
