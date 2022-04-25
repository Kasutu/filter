import DateAndTime from '../interface/dateAndTime.interface';

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
