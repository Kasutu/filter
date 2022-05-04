import Org from '../interface/org.interface';

import OrgData from '../dummyData/org.dummy';
import { events } from './dataBase.db';

import GetRandom from '../util/getRandom.util';

const { getRandom } = new GetRandom();
const OrgProp = new OrgData();

export default class OrgList {
  protected data: Org[] = [];

  public makeData(qty: number): void {
    const tempArr: Org[] = [];

    for (let i = 0; i < qty; i++) {
      let tempOrg: Org = {
        id: OrgProp.id[i],
        name: OrgProp.name[i],
        events: events.list(),
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
