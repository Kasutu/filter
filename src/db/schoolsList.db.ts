import School from '../interface/school.interface';
import GetRandom from '../util/getRandom.util';
import SchoolData from '../dummyData/school.dummy';
import OrgList from './orgList.db';
import { displayUpcomingEvents } from '../Filter';
import DateTime24h from '../type/dateTime24h.type';

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

  // display the upcoming events of all its orgs, and also the recent events.
  public getAllUpcomingEvents(
    currentDateAndTime: DateTime24h,
    options?: 'recent'
  ): void {
    const schoolsList: School[] = this.data;

    schoolsList.forEach((e) => {
      e.orgs.forEach((org) => {
        const eventsArr = org.events;
        console.log(
          options !== undefined ? options : 'upcoming',
          org.name,
          displayUpcomingEvents(eventsArr, currentDateAndTime, options)
        );
      });
    });
  }
}
