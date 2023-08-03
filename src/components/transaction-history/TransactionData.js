export function TransactionData({ transactions }) {
  return transactions.map(details => {
    return (
      <tr key={details.id}>
        <td>{details.type}</td>
        <td>{details.amount}</td>
        <td>{details.currency}</td>
      </tr>
    );
  });
}
