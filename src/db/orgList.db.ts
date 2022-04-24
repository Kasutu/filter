import Org from '../interface/org.interface';

import OrgData from '../dummyData/org.dummy';
import EventList from './eventList.db';

import GetRandom from '../util/getRandom.util';

const { getRandom } = new GetRandom();
const OrgProp = new OrgData();
const eventList = new EventList();

export default class OrgList {
  protected data: Org[] = [];

  public makeData(qty: number): void {
    const tempArr: Org[] = [];

    for (let i = 0; i < qty; i++) {
      eventList.makeData(10);

      let tempOrg: Org = {
        id: OrgProp.id[i],
        name: OrgProp.name[i],
        events: eventList.list(),
        exclusivity: getRandom(OrgProp.position),
      };

      tempArr.push(tempOrg);
    }

    this.data = tempArr;
  }

  public list(): Org[] {
    return this.data;
  }
}
