import Event from '../interface/event.interface';
import EventData from '../dummyData/event.dummy';
import RandomDuration from '../util/randomDuration.util';
import DateParser from '../util/dateParser.util';
import DateAndTime from '../interface/dateAndTime.interface';
import GetRandom from '../util/getRandom.util';

const { getRandom } = new GetRandom();
const { dateParser } = new DateParser();
const duration = new RandomDuration();
const { id, dates, name, type, venue } = new EventData();
export default class EventList {
  protected data: Event[] = [];

  public makeData(qty: number): void {
    const tempArr: Event[] = [];
    const timeList: DateAndTime[] = dateParser(dates, 'both', 'arr');

    for (let i = 0; i < qty; i++) {
      let event: Event = {
        id: getRandom(id),
        name: getRandom(name),
        duration: duration.get(timeList),
        venue: getRandom(venue),
        type: getRandom(type),
      };

      tempArr.push(event);
    }

    this.data = tempArr;
  }

  public list(): Event[] {
    return this.data;
  }
}
