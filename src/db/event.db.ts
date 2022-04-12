import Event from '../interface/event.interface';
import getRandom from '../util/functions.util';
import UserList from './users.db';
import EventData from '../dummyData/event.dummy';
import randomDuration from '../util/randomDuration.util';
import dateParser from '../util/dateParser.util';
import Duration from '../interface/duration.interface';

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
      let date = dateParser('date', getRandom(EventProp.dates));
      let time = dateParser('time', getRandom(EventProp.dates));

      let tempEvent: Event = {
        id: '',
        name: '',
        duration: ,
        venue: getRandom(EventProp.venue),
        type: getRandom(EventProp.type),
      };

      tempArr.push(tempEvent);
    }

    this.data = tempArr;
  }
}
