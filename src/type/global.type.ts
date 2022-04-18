import { parseCommandLine } from 'typescript';
import EventData from '../dummyData/event.dummy';
import DateAndTime, { Time } from '../interface/dateAndTime.interface';

const EventProps = new EventData();

type GlobalTypes = {
  dateAndTimeArr: typeof EventProps['dates'];
  dateAndTimeStr: typeof EventProps['dates'][0];
};

export type ToArray<T> = T extends any ? T[] : never;

export default GlobalTypes;
