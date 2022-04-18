import EventList from './db/eventList.db';
import UserList from './db/usersList.db';

const events = new EventList();
const users = new UserList();

console.log(events.get());
console.log(users.get());
