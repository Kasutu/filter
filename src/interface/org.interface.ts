import OrgPosition from '../enum/orgPosition.enum';
import Event from './event.interface';
export default interface Org {
  name: string;
  id: string;
  events: Event[];
  exclusivity: OrgPosition | null;
}
