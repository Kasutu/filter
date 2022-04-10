import gender from '../enum/gender.enum';
import OrgPosition from '../enum/orgPosition.enum';

export default interface User {
  id: string;
  name: {
    first: string;
    last: string;
  };
  course: string;
  yearLevel: string;
  gender: gender;
  phoneNumber: number;
  email: string;
  age: number;
  organization: {
    name: string | null;
    position: OrgPosition | null;
  };
}
