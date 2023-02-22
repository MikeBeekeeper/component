import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json'

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics'
import Statlist from 'components/Statistics/Statlist';
import Friendlist from './components/Friendlist/Friendlist';
import TransactionHistory from './components/Transactions/TransactionHistory';
import TransactionTable from './components/Transactions/TransactionTable';



export default function App ()  {
  return (
    <div className='app'>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats">
            <Statlist items={data}/> 
      </Statistics>
      
      <Friendlist items={friends} />

      <TransactionHistory>
        <TransactionTable items={transactions} />
      </TransactionHistory>

    </div>
  );
};