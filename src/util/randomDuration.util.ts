import DateAndTime from '../interface/dateAndTime.interface';
import Duration from '../interface/duration.interface';
import GetRandom from './getRandom.util';

const { getRandom } = new GetRandom();
export default class RandomDuration {
  public get(list: DateAndTime[]): Duration {
    let dateAndTimeList = list;
    let start;
    let end;

    // select random time obj
    start = getRandom(dateAndTimeList);
    end = getRandom(dateAndTimeList);

    if (start === undefined) {
      start = getRandom(dateAndTimeList);

      if (start === undefined) {
        start = getRandom(dateAndTimeList);
      }
    } else if (end === undefined) {
      end = getRandom(dateAndTimeList);

      if (end === undefined) {
        end = getRandom(dateAndTimeList);
      }
    } else if (
      (end['day'] === start['day'] && end['month'] === start['month']) ||
      (start['day'] > end['day'] && start['month'] > end['month']) ||
      end['hours'] % 12 > start['hours'] % 12
    ) {
      end = getRandom(dateAndTimeList);

      if (end === undefined) {
        end = getRandom(dateAndTimeList);
      }
    }

    return {
      start,
      end,
    };
  }
}
