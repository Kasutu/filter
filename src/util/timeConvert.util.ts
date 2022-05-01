import DateAndTime from '../interface/dateAndTime.interface';
import DateTime24h from '../type/dateTime24h.type';

export default function convert12hrTime(dateAndTime: DateAndTime): number {
  const { day, hours, minutes, month, suffix, year } = dateAndTime;

  let newHr;

  if (suffix === 'pm' && hours >= 1) {
    newHr = hours + 12;
  } else if (suffix === 'am' && hours === 12) {
    newHr = 0;
  } else {
    newHr = hours;
  }

  return Number(`${year}${month}${day}${newHr}${minutes}`);
}

export function convert12hrTimeObj(dateAndTime: DateAndTime): DateTime24h {
  const { day, hours, minutes, month, suffix, year } = dateAndTime;

  let newHr;

  if (suffix === 'pm' && hours >= 1) {
    newHr = hours + 12;
  } else if (suffix === 'am' && hours === 12) {
    newHr = 0;
  } else {
    newHr = hours;
  }

  return { year, month, day, newHr, minutes };
}
