import Event from '../interface/event.interface';
import EventData from '../dummyData/event.dummy';
import RandomDuration from '../util/randomDuration.util';
import DateParser from '../util/dateParser.util';
import DateAndTime, { Time } from '../interface/dateAndTime.interface';
import GetRandom from '../util/getRandom.util';
import OrgData from '../dummyData/org.dummy';
import filter, { query } from '../filter';
import UserData from '../dummyData/user.dummy';
import User from '../interface/user.interface';
import DynamicLoginInfo from '../type/dynamicLoginInfo.type';

const { getRandom } = new GetRandom();
const { dateParser } = new DateParser();
const duration = new RandomDuration();
const { id, dates, name, type, venue } = new EventData();
const { position } = new OrgData();
const user = new UserData();
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
        exclusivity: getRandom(position),
      };

      tempArr.push(event);
    }

    this.data = tempArr;
  }

  public register(
    eventId: Event['id'],
    userId: User['id'],
    activityType: 'login' | 'logout',
    userTime: Time
  ): void {
    const currentEvent = query(this.data, 'id', eventId);
    if (currentEvent !== undefined) {
      console.log('[INFO] SUCCESS! Matched Event ID: ', eventId);
      currentEvent.registration.push({ [activityType]: userId, ...userTime });
    } else {
      console.log('[WARN] FAILED! No Matched Event ID: ', eventId);
    }
  }

  public list(): Event[] {
    return this.data;
  }
}
