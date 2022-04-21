import DateAndTime, { Date, Time } from './dateAndTime.interface';

export default interface Duration {
  start: string | Date | Time | DateAndTime | undefined;
  end: string | Date | Time | DateAndTime | undefined;
}
