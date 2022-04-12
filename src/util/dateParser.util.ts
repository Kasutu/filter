import DateAndTime, { Date, Time } from '../interface/dateAndTime.interface';
import getRandom from './functions.util';

export default function dateParser(
  type: 'date' | 'time' | 'both',
  time: string
): Date | Time | DateAndTime {
  const dataArr = time.split(' ');

  const tempDate: Date = {
    year: Number(dataArr[0].split('-')[0]),
    month: Number(dataArr[0].split('-')[1]),
    day: Number(dataArr[0].split('-')[2]),
  };

  const tempTime: Time = {
    hours: Number(dataArr[1].split(':')[0]),
    minutes: Number(dataArr[1].split(':')[1]),
    suffix: dataArr[1].split(':')[2] as 'am' | 'pm',
  };

  const dateAndTime: DateAndTime = {
    ...tempDate,
    ...tempTime,
  };

  if (type === 'date') {
    return tempDate;
  } else if (type === 'time') {
    return tempTime;
  } else {
    return dateAndTime;
  }
}

export function getDateAndTime(
  option: 'array' | 'object',
  list: string[]
): DateAndTime[] | DateAndTime {
  const tempArr: Date | Time | DateAndTime[] = [];

  if (option === 'array') {
    for (let i = 0; i < list.length; i++) {
      const data = dateParser('both', getRandom(list));
      tempArr.push(data);
    }

    return tempArr;
  } else {
    const data = dateParser('both', getRandom(list));
    return data;
  }
}
