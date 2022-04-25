import Event from '../interface/event.interface';
import EventData from '../dummyData/event.dummy';
import RandomDuration from '../util/randomDuration.util';
import DateParser from '../util/dateParser.util';
import DateAndTime, { Time } from '../interface/dateAndTime.interface';
import GetRandom from '../util/getRandom.util';
import OrgData from '../dummyData/org.dummy';
import filter, { query } from '../filter';
import User from '../interface/user.interface';

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
    const currentUser = query(users, 'id', userId);
    const currentEvent = query(this.data, 'id', eventId);
    const eventExclusivity = currentEvent?.exclusivity;
    const userExclusivity = currentUser?.orgPosition;

    if (currentEvent !== undefined && eventExclusivity === userExclusivity) {
      console.log(
        '[INFO] SUCCESS! Matched level: ',
        eventExclusivity,
        ' User position: ',
        userExclusivity
      );
      console.log('[INFO] SUCCESS! Matched Event ID: ', eventId);

      const loggedInUsr = query(currentEvent.registration, 'UID', userId);
      const overtime =
        (loggedInUsr?.loginTime as number) - currentEvent.duration.start;

      if (activityType === 'login') {
        // regular login
        currentEvent.registration.push({
          [`${activityType}Time`]: userTime,
          UID: userId,
        });
      }

      if (
        loggedInUsr !== undefined &&
        activityType === 'logout' &&
        overtime > 15
      ) {
        // late
        currentEvent.registration.push({
          remark: 'late',
          [`${activityType}Time`]: userTime,
          UID: userId,
        });
      }

      return;
    } else {
      console.log('[WARN] FAILED! No Matched Event ID: ', eventId);
      console.log(
        '[WARN] FAILED! Even is only for level: ',
        eventExclusivity,
        ' User position: ',
        userExclusivity
      );
    }
  }

  // Filter those who registered late, or left (logged-out) early.
  // NOTES:
  // define late - 15 min after the said time
  //  - greater than 15
  //  - userTime - event time (output should be greater to trigger 'late')
  //  - logged out less than the end time triggers 'late'
  // measure the duration like [ 7am ----------> 10am ]
  public find(eventId: string, key: 'late' | 'left', userDb: User[]) {
    // find violators
    const regArr = query(this.data, 'id', eventId)?.registration;

    if (key === 'late' && regArr !== undefined) {
      // late
      const lateUID = query(regArr, 'remark', 'late')?.UID;

      if (lateUID !== undefined) {
        return filter(userDb, 'id', lateUID);
      }

      return '[INFO] No late registrations ';
    } else if (
      key === 'left' &&
      regArr !== undefined &&
      query(regArr, 'remark', 'late') === undefined
    ) {
      // no logout
      console.log('line 118');

      return filter(regArr, 'UID');

      // fix this return a user here
    }
  }

  public list(): Event[] {
    return this.data;
  }
}
