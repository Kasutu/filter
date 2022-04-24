import User from '../interface/user.interface';

import UserData from '../dummyData/user.dummy';
import OrgData from '../dummyData/org.dummy';

import GetRandom from '../util/getRandom.util';

const { getRandom } = new GetRandom();
const UserProp = new UserData();
const OrgProp = new OrgData();
export default class UserList {
  protected data: User[] = [];

  public makeData(qty: number): void {
    const tempArr: User[] = [];

    for (let i = 0; i < qty; i++) {
      let tempUser: User = {
        id: UserProp.id[i],
        firstName: UserProp.firstName[i],
        lastName: UserProp.LastName[i],
        fullName: UserProp.firstName[i] + ' ' + UserProp.LastName[i],
        course: getRandom(UserProp.course),
        yearLevel: getRandom([1, 2, 3, 4]),
        gender: getRandom(UserProp.gender),
        phoneNumber: getRandom(UserProp.phoneNumber),
        email: getRandom(UserProp.email),
        age: getRandom([18, 19, 20, 21, 22]),
        orgId: getRandom(OrgProp.id),
        orgPosition: i < qty ? OrgProp.position[i] : null,
      };

      tempArr.push(tempUser);
    }

    this.data = tempArr;
  }

  public list(): User[] {
    return this.data;
  }
}
