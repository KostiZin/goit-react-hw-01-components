import { TransactionData } from './TransactionData';

export function TransactionHistory({ transactions }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <TransactionData transactions={transactions} />
      </tbody>
    </table>
  );
}
