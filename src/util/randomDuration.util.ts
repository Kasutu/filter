import DateAndTime from '../interface/dateAndTime.interface';
import Duration from '../interface/duration.interface';
import GetRandom from './getRandom.util';
import convert12hrTime from './timeConvert.util';

const { getRandom } = new GetRandom();
export default class RandomDuration {
  public get(list: DateAndTime[]): {
    start: number;
    end: number;
  } {
    let start;
    let end;

    // select random time obj
    start = convert12hrTime(getRandom(list));
    end = convert12hrTime(getRandom(list));

    if (end < start) {
      end = convert12hrTime(getRandom(list));
    }

    return {
      start,
      end,
    };
  }
}
