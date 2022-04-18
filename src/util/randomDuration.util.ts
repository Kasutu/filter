import DateAndTime from '../interface/dateAndTime.interface';
import Date, { Time } from '../interface/dateAndTime.interface';
import Duration from '../interface/duration.interface';
import findPropIn from './findPropIn.util';
import getRandom from './functions.util';

export default function randomDuration(dateList: Date[]): Duration;
export default function randomDuration(TimeList: Time[]): Duration;
export default function randomDuration(dateAndTime: DateAndTime[]): Duration;

export default function randomDuration(list: any): Duration {
  let tempDuration: Duration = {
    start: 'none',
    end: 'none',
  };

  if (findPropIn('year', list[0])) {
    // date format
    const dateList: Date[] = list;

    // select random dates obj
    let start: Date = getRandom(dateList);
    let end: Date = getRandom(dateList);

    if (
      (end.day === start.day && end.month === start.month) ||
      (start.day > end.day && start.month > end.month)
    ) {
      end = getRandom(dateList);
    } else {
      tempDuration.start = start;
      tempDuration.end = end;
    }

    return tempDuration;
  } else if (findPropIn('hours', list[0])) {
    // time format
    const timeList: Time[] = list;

    // select random time obj
    let start: Time = getRandom(timeList);
    let end: Time = getRandom(timeList);

    while (end.hours % 12 < start.hours % 12) {
      if (end.suffix === 'am') {
        end = getRandom(timeList);
        break;
      }
    }

    tempDuration.start = start;
    tempDuration.end = end;

    return tempDuration;
  } else if (findPropIn('hours', list[0]) && findPropIn('year', list[0])) {
    // date & time format
    const dateAndTimeList: DateAndTime[] = list;

    // select random time obj
    let start: DateAndTime = getRandom(dateAndTimeList);
    let end: DateAndTime = getRandom(dateAndTimeList);

    if (
      (end.day === start.day && end.month === start.month) ||
      (start.day > end.day && start.month > end.month) ||
      end.hours % 12 > start.hours % 12
    ) {
      end = getRandom(dateAndTimeList);
    } else {
      tempDuration.start = start;
      tempDuration.end = end;
    }

    return tempDuration;
  } else {
    return tempDuration;
  }
}
