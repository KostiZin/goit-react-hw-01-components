import transactions from '../data/transactions.json';

console.log(transactions);

let xxx = transactions.map(yy => {
  return console.log(yy);
});
console.log(xxx);

export function TransactionHistory({ transactions }) {
  return transactions.map(data => {
    return (
      <table class="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          <tr key={data.id}>
            <td>{data.type}</td>
            <td>{data.amount}</td>
            <td>{data.currency}</td>
          </tr>
        </tbody>
      </table>
    );
  });
}
