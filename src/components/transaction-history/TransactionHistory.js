import PropTypes from 'prop-types';

import {
  Table,
  TableTitles,
  TableBody,
  Thead,
  TableTd,
} from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <Table>
      <Thead>
        <tr>
          <TableTitles>Type</TableTitles>
          <TableTitles>Amount</TableTitles>
          <TableTitles>Currency</TableTitles>
        </tr>
      </Thead>
      <TableBody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <TableTd>{item.type}</TableTd>
              <TableTd>{item.amount}</TableTd>
              <TableTd>{item.currency}</TableTd>
            </tr>
          );
        })}
      </TableBody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
