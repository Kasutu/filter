import User from '../interface/user.interface';

import UserData from '../dummyData/user.dummy';
import OrgData from '../dummyData/org.dummy';
import GetRandom from '../util/getRandom.util';

const { getRandom } = new GetRandom();
const UserProp = new UserData();
const OrgProp = new OrgData();

export default class UserList {
  protected data: User[] | null = [];

  public makeData(qty: number): void {
    const tempArr: User[] = [];

    for (let i = 0; i < qty; i++) {
      let tempUser: User = {
        id: getRandom(UserProp.id),
        name: {
          first: getRandom(UserProp.firstName),
          last: getRandom(UserProp.LastName),
        },
        course: getRandom(UserProp.course),
        yearLevel: getRandom([1, 2, 3, 4]),
        gender: getRandom(UserProp.gender),
        phoneNumber: getRandom(UserProp.phoneNumber),
        email: getRandom(UserProp.email),
        age: getRandom([18, 19, 20, 21, 22]),
        organization: {
          id: getRandom(OrgProp.id),
          position: getRandom(OrgProp.position),
        },
      };

      tempArr.push(tempUser);
      this.data = tempArr;
    }
  }

  public list(): any[] | null {
    return this.data;
  }
}
