import { Section, List, UlFather } from './Statistics.styled';

export function Statistics({ title, stats }) {
  let statData = stats.map(stat => {
    return (
      <List key={stat.id}>
        <span>{stat.label}</span>
        <span>{stat.percentage}%</span>
      </List>
    );
  });

  return (
    <Section>
      <h2>{title}</h2>
      <UlFather>{statData}</UlFather>
    </Section>
  );
}
