import gender from '../enum/gender.enum';
import OrgPosition from '../enum/orgPosition.enum';

export default interface User {
  id: string;
  name: {
    first: string;
    last: string;
  };
  course: string;
  yearLevel: 1 | 2 | 3 | 4;
  gender: gender;
  phoneNumber: string;
  email: string;
  age: number;
  organization: {
    id: string | null;
    position: OrgPosition | null;
  };
}
