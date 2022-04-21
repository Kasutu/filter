import EventData from '../dummyData/event.dummy';

const EventProps = new EventData();

type GlobalTypes = {
  dateAndTimeArr: typeof EventProps['dates'];
  dateAndTimeStr: typeof EventProps['dates'][0];
};

export type ToArray<T> = T extends any ? T[] : never;

export default GlobalTypes;
