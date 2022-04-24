import EventType from '../enum/eventType.enum';
import Duration from './duration.interface';
import OrgPosition from '../enum/orgPosition.enum';
import DynamicLoginInfo from '../type/dynamicLoginInfo.type';
export default interface Event {
  id: string;
  name: string;
  duration: Duration;
  venue: string;
  type: EventType;
  exclusivity: OrgPosition | null;
  registration: DynamicLoginInfo[];
}
