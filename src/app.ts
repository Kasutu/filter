import EventList from './db/eventList.db';
import UserList from './db/usersList.db';
import OrgList from './db/orgList.db';
import SchoolList from './db/schoolsList.db';
import filter from './filter';
import OrgPosition from './enum/orgPosition.enum';
import { Time } from './interface/dateAndTime.interface';
import EventData from './dummyData/event.dummy';
import GetRandom from './util/getRandom.util';

const events = new EventList();
const users = new UserList();
const org = new OrgList();
const school = new SchoolList();
const eventData = new EventData();
const { getRandom } = new GetRandom();

// init
events.makeData(10);

users.makeData(10);
org.makeData(15);
school.makeData(10);

function loginThem(howMany: number, timeArr: Time[]): void {
  for (let i = 0; i < howMany; i++) {
    events.register(
      events.list()[1]['id'],
      users.list()[i]['id'],
      'login',
      getRandom(timeArr)
    );
  }
}

function logoutThem(howMany: number, timeArr: Time[]): void {
  for (let i = 0; i < howMany; i++) {
    events.register(
      events.list()[1]['id'],
      users.list()[i]['id'],
      'logout',
      getRandom(timeArr)
    );
  }
}

loginThem(2, eventData.loginTime);
logoutThem(2, eventData.loginTime);

// console.log(events.list());
// console.log(users.list());
// console.log(org.list());
// console.log(school.list());

console.log(['INFO'], ['Running Filter...']);
let event1 = events.list()[1];

// console.log(filter(events.list(), 'exclusivity', null));
// console.log(filter(events.list(), 'exclusivity', OrgPosition));
// console.log(filter(events.list(), 'id', events.list()[1]['id']));
// console.log(filter(events.list(), 'exclusivity', OrgPosition.Ambassador));
// console.log(filter(school.list(), 'id'));
// console.log(filter(users.list(), 'fullName'));
// console.log(filter(users.list(), 'fullName', 'Carter Morton'));
// console.log(filter(users.list(), 'orgPosition', OrgPosition.President));
// console.log(filter(users.list(), 'orgId', 'c2uaPhhK8r'));
// console.log(filter(org.list(), 'name', 'GDSC'));
// console.log(filter(org.list(), 'exclusivity', null));

// const filteredEvents = filter(events.list(), 'registration');

// const filteredStartOnly = filter(events.list(), 'duration', undefined, 'start');

// console.log(filteredStartOnly);
// console.log(filteredEvents);
// console.log(event1.registration);
console.log(event1);
// set to obj
// then evaluate
