import PropTypes from 'prop-types';

import { Section, ListItem, List } from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <h2>{title}</h2>}
      <List>
        {stats.map(stat => {
          return (
            <ListItem key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </ListItem>
          );
        })}
      </List>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
