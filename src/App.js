import Person from './components/Person/Person';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriedsList/FriendList';
import TransactionsHistory from './components/TransactionsHistory/Transaction';

import user from './data/user.json';
import data from './data/data.json';
import friends from 'data/friends.json';
import transactions from './data/transactions.json';

export default function App() {
  return (<div>
    <Person
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Statistics title="Upload stats" stats={data}/>
    <FriendList friends={friends}/>
    <TransactionsHistory items={transactions}/>
  </div>
  );
}
