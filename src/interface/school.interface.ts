export default interface School<T> {
  name: string;
  id: string;
  orgs: T[];
}
