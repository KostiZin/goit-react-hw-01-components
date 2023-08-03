import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { TransactionHistory } from './transaction-history/TransactionHistory';
// import { FriendList } from './friend-list/FriendList';

import data from './data/data.json';
// import friends from './data/friends.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile />
      <Statistics title="Upload stats" stats={data} />
      {/* <FriendList friends={friends} /> */}
      <TransactionHistory items={transactions} />
    </div>
  );
};
