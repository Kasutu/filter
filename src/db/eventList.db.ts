import Event from '../interface/event.interface';
import EventData from '../dummyData/event.dummy';
import RandomDuration from '../util/randomDuration.util';
import DateParser from '../util/dateParser.util';
import DateAndTime, { Time } from '../interface/dateAndTime.interface';
import GetRandom from '../util/getRandom.util';
import OrgData from '../dummyData/org.dummy';
import { query } from '../filter';
import User from '../interface/user.interface';
import UserList from './usersList.db';

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
    userTime: Time,
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

      currentEvent.registration.push({
        [`${activityType}UID`]: userId,
        ...userTime,
      });
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

  public list(): Event[] {
    return this.data;
  }
}
