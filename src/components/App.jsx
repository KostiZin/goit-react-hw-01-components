import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { TransactionHistory } from './transaction-history/TransactionHistory';
import { FriendList } from './friend-list/FriendList';

import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import user from '../data/user.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
