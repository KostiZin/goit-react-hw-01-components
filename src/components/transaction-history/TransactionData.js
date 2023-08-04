import { TableCell } from './TransactionHistory.styled';

export function TransactionData({ transactions }) {
  return transactions.map(details => {
    return (
      <tr key={details.id}>
        <TableCell>{details.type}</TableCell>
        <TableCell>{details.amount}</TableCell>
        <TableCell>{details.currency}</TableCell>
      </tr>
    );
  });
}
