import { Section, List, UlFather } from './Statistics.styled';

export function Statistics({ title, stats }) {
  let statData = stats.map(stat => {
    return (
      <List className="item" key={stat.id}>
        <span className="label">{stat.label}</span>
        <span className="percentage">{stat.percentage}%</span>
      </List>
    );
  });

  return (
    <Section className="statistics">
      <h2 className="title">{title}</h2>
      <UlFather className="stat-list">{statData}</UlFather>
    </Section>
  );
}
