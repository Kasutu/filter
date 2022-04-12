import EventType from '../enum/eventType.enum';

export default interface Event {
  id: string;
  name: string;
  duration: {
    start: string;
    end: string;
  };
  venue: string;
  type: EventType;
}
