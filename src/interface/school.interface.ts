import Org from './org.interface';

export default interface School {
  name: string;
  id: string;
  orgs: Org[];
}
