import School from '../interface/school.interface';
import GetRandom from '../util/getRandom.util';
import SchoolData from '../dummyData/school.dummy';
import OrgList from './orgList.db';

const { getRandom } = new GetRandom();
const schoolProp = new SchoolData();
const orgList = new OrgList();
export default class SchoolList {
  protected data: School[] = [];

  public makeData(qty: number): void {
    const tempArr: School[] = [];

    for (let i = 0; i < qty; i++) {
      orgList.makeData(5);

      let tempOrg: School = {
        id: schoolProp.id[i],
        name: schoolProp.name[i],
        orgs: orgList.list(),
      };

      tempArr.push(tempOrg);
    }

    this.data = tempArr;
  }

  public list(): School[] {
    return this.data;
  }
}
