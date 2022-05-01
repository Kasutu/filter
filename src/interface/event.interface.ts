import EventType from '../enum/eventType.enum';
import OrgPosition from '../enum/orgPosition.enum';
import DynamicLoginInfo from '../type/loginInfo.type';
import DateTime24h from '../type/dateTime24h.type';
export default interface Event {
  id: string;
  name: string;
  duration: {
    start: DateTime24h;
    end: DateTime24h;
  };
  venue: string;
  type: EventType;
  exclusivity: OrgPosition | null;
  registration: DynamicLoginInfo[];
}
