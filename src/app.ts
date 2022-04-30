import filter from './filter';
import OrgPosition from './enum/orgPosition.enum';
import DateAndTime, { Time } from './interface/dateAndTime.interface';
import EventData from './dummyData/event.dummy';
import GetRandom from './util/getRandom.util';
import { events, users } from './db/dataBase.db';
import DateParser from './util/dateParser.util';
import convert12hrTime from './util/timeConvert.util';

const { dateParser } = new DateParser();
const eventData = new EventData();
const { getRandom } = new GetRandom();

function loginThem(howMany: number, timeArr: DateAndTime[]): void {
  for (let i = 0; i < howMany; i++) {
    events.register(
      events.list()[1]['id'],
      users.list()[i]['id'],
      'login',
      convert12hrTime(getRandom(timeArr)),
      users.list()
    );
  }
}

function logoutThem(howMany: number, timeArr: DateAndTime[]): void {
  for (let i = 0; i < howMany; i++) {
    events.register(
      events.list()[1]['id'],
      users.list()[i]['id'],
      'logout',
      convert12hrTime(getRandom(timeArr)),
      users.list()
    );
  }
}

const dates = dateParser(eventData.loginTime, 'both', 'arr');

loginThem(5, dates);

events.register(
  events.list()[1]['id'],
  users.list()[6]['id'],
  'login',
  convert12hrTime(getRandom(dates)),
  users.list()
);

logoutThem(5, dates);

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
// console.log(filter(users.list(), 'fullName', 'Jam Bonifacio'));
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

const late = events.find('bpuVGbn2wW', 'late', users.list());
const left = events.find('bpuVGbn2wW', 'left', users.list());

console.log(late, left);
