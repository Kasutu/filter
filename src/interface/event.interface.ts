import EventType from '../enum/eventType.enum';
import OrgPosition from '../enum/orgPosition.enum';
import DynamicLoginInfo from '../type/dynamicLoginInfo.type';
export default interface Event {
  id: string;
  name: string;
  duration: {
    start: number;
    end: number;
  };
  venue: string;
  type: EventType;
  exclusivity: OrgPosition | null;
  registration: DynamicLoginInfo[];
}
