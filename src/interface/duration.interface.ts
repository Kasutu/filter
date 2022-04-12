import DateAndTime from './dateAndTime.interface';
import Date, { Time } from './dateAndTime.interface';

export default interface Duration {
  start: string | Date | Time | DateAndTime;
  end: string | Date | Time | DateAndTime;
}
