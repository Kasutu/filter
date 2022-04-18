import EventType from '../enum/eventType.enum';
import Duration from './duration.interface';

export default interface Event {
  id: string;
  name: string;
  duration: Duration;
  venue: string;
  type: EventType;
}
