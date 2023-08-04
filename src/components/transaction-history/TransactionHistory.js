import { TransactionData } from './TransactionData';
import {
  Table,
  TableTitles,
  TableLine,
  Thead,
} from './TransactionHistory.styled';

export function TransactionHistory({ transactions }) {
  return (
    <Table>
      <Thead>
        <tr>
          <TableTitles>Type</TableTitles>
          <TableTitles>Amount</TableTitles>
          <TableTitles>Currency</TableTitles>
        </tr>
      </Thead>
      <TableLine>
        <TransactionData transactions={transactions} />
      </TableLine>
    </Table>
  );
}
