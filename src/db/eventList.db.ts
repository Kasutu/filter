import Event from '../interface/event.interface';
import EventData from '../dummyData/event.dummy';
import RandomDuration from '../util/randomDuration.util';
import DateParser from '../util/dateParser.util';
import DateAndTime from '../interface/dateAndTime.interface';
import GetRandom from '../util/getRandom.util';
import OrgData from '../dummyData/org.dummy';
import filter, { hunt, query } from '../filter';
import User from '../interface/user.interface';
import loginInfo from '../type/loginInfo.type';

const { getRandom } = new GetRandom();
const { dateParser } = new DateParser();
const duration = new RandomDuration();
const { id, dates, name, type, venue } = new EventData();
const { position } = new OrgData();
export default class EventList {
  protected data: Event[] = [];

  public makeData(qty: number): void {
    const tempArr: Event[] = [];
    const timeList: DateAndTime[] = dateParser(dates, 'both', 'arr');

    for (let i = 0; i < qty; i++) {
      let event: Event = {
        id: id[i],
        name: name[i],
        duration: duration.get(timeList),
        venue: getRandom(venue),
        type: getRandom(type),
        registration: [],
        exclusivity: i < qty ? position[i] : null,
      };

      tempArr.push(event);
    }

    this.data = tempArr;
  }

  public register(
    eventId: Event['id'],
    userId: User['id'],
    activityType: 'login' | 'logout',
    userTime: number,
    users: User[]
  ): void {
    const currentUser = query(users, 'id', userId)[0];
    const currentEvent = query(this.data, 'id', eventId)[0];
    const eventExclusivity = currentEvent?.exclusivity;
    const userExclusivity = currentUser?.orgPosition;

    if (
      currentUser !== undefined &&
      currentEvent !== undefined &&
      eventExclusivity === userExclusivity
    ) {
      console.log(
        '[INFO] SUCCESS! Matched level: ',
        eventExclusivity,
        ' User position: ',
        userExclusivity,
        'Matched Event ID: ',
        eventId
      );

      if (activityType === 'login') {
        // regular login
        let user: loginInfo = {
          UID: userId,
          login: true,
          logout: false,
          late: false,
          loginTime: userTime,
          logoutTime: 0,
        };

        // late
        const overtime = user.loginTime - currentEvent?.duration['start'];
        console.log(['overtime', overtime]);

        if (overtime > 15) {
          user.loginTime = userTime;
          user.late = true;
        }

        currentEvent.registration.push(user);
      }

      if (activityType === 'logout') {
        const loggedInUsr = query(
          currentEvent['registration'],
          'UID',
          userId
        )[0];

        if (loggedInUsr !== undefined) {
          loggedInUsr.logout = true;
          loggedInUsr.logoutTime = userTime;
        }
      }
    } else {
      if (currentUser === undefined && currentEvent === undefined) {
        console.log('[WARN] FAILED! No Matched Event ID: ', eventId);
      } else if (eventExclusivity === userExclusivity) {
        console.log(
          '[WARN] FAILED! Even is only for level: ',
          eventExclusivity,
          ' User position: ',
          userExclusivity
        );
      }
    }
  }

  // Filter those who registered late, or left (logged-out) early.
  // NOTES:
  // define late - 15 min after the said time
  //  - greater than 15
  //  - userTime - event time (output should be greater to trigger 'late')
  //  - logged out less than the end time triggers 'late'
  // measure the duration like [ 7am ----------> 10am ]

  // objects with login time

  public find(eventId: string, key: 'late' | 'left', userDb: User[]) {
    // find violators
    const matchedEvents = query(this.data, 'id', eventId);
    const regArr = hunt(matchedEvents, 'registration');
    let tempArr;

    regArr.forEach((LoginInfoArr) => {
      if (key === 'late' && LoginInfoArr[0] !== undefined) {
        console.log('[INFO] Finding ', [key]);
        // late find late === true in the event list and return the user
        const lateUser = query(LoginInfoArr, 'late', true);

        if (lateUser[0] !== undefined) {
          lateUser.forEach((user) => {
            tempArr = query(userDb, 'id', user.UID);
          });
        } else {
          console.log('[INFO] No late registrations ');
        }
      } else if (key === 'left' && LoginInfoArr[0] !== undefined) {
        console.log('[INFO] Finding ', [key]);
        // no logout

        const leftUser = query(LoginInfoArr, 'logout', false);

        if (leftUser[0] !== undefined) {
          leftUser.forEach((user) => {
            tempArr = query(userDb, 'id', user.UID);
          });
        } else {
          console.log('[INFO] No Left participants ');
        }
      }
    });

    return tempArr;
  }

  public list(): Event[] {
    return this.data;
  }
}
