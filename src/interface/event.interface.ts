import EventType from '../enum/eventType.enum';

export default interface Event {
  id: string;
  name: string;
  start: number;
  end: number;
  venue: string;
  type: EventType;
}
