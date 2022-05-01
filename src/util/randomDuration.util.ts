import DateAndTime from '../interface/dateAndTime.interface';
import GetRandom from './getRandom.util';
import { convert12hrTimeObj } from './timeConvert.util';
import DateTime24h from '../type/dateTime24h.type';

const { getRandom } = new GetRandom();
export default class RandomDuration {
  public get(list: DateAndTime[]): {
    start: DateTime24h;
    end: DateTime24h;
  } {
    let start: DateTime24h;
    let end: DateTime24h;

    // select random time obj
    start = convert12hrTimeObj(getRandom(list));
    end = convert12hrTimeObj(getRandom(list));

    if (
      (end['day'] === start['day'] && end['month'] === start['month']) ||
      (start['day'] > end['day'] && start['month'] > end['month']) ||
      end['newHr'] > start['newHr']
    ) {
      end = convert12hrTimeObj(getRandom(list));
    }

    return {
      start,
      end,
    };
  }
}
