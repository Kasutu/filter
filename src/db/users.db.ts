import User from '../interface/user.interface';

import UserData from '../dummyData/user.dummy';
import getRandom from '../util/functions.util';
import OrgData from '../dummyData/org.dummy';

const UserProp = new UserData();
const OrgProp = new OrgData();

export default class UserList {
  protected data: User[] | null;

  constructor() {
    this.data = null;
    this.makeData(5);
  }

  protected makeData(qty: number): void {
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
    }

    this.data = tempArr;
  }

  get(): User[] | null {
    return this.data;
  }
}
