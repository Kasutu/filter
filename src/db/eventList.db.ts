import Event from '../interface/event.interface';
import getRandom from '../util/functions.util';
import UserList from './usersList.db';
import EventData from '../dummyData/event.dummy';
import randomDuration from '../util/randomDuration.util';
import dateParser from '../util/dateParser.util';
import DateAndTime from '../interface/dateAndTime.interface';

const EventProp = new EventData();

export default class EventList extends UserList {
  protected data: any[] | null;

  constructor() {
    super();
    this.data = null;
    this.makeData(5);
  }

  protected override makeData(qty: number): void {
    this.data = [];
    const tempArr = [];

    for (let i = 0; i < qty; i++) {
      const timeList: DateAndTime[] = dateParser(
        EventProp.dates,
        'both',
        'arr'
      );

      let tempEvent: Event = {
        id: getRandom(EventProp.id),
        name: getRandom(EventProp.name),
        duration: randomDuration(timeList),
        venue: getRandom(EventProp.venue),
        type: getRandom(EventProp.type),
      };

      tempArr.push(tempEvent);
    }

    this.data = tempArr;
  }

  get(): any[] | null {
    return this.data;
  }
}
