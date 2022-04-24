import gender from '../enum/gender.enum';
import OrgPosition from '../enum/orgPosition.enum';

export default interface User {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  course: string;
  yearLevel: 1 | 2 | 3 | 4;
  gender: gender;
  phoneNumber: string;
  email: string;
  age: number;
  orgId: string | null;
  orgPosition: OrgPosition | null;
}
