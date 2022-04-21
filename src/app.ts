import EventList from './db/eventList.db';
import UserList from './db/usersList.db';

const events = new EventList();
const users = new UserList();

// init
events.makeData(10);
users.makeData(10);

console.log(events.list());
console.log(users.list());
