export default interface Org<T> {
  name: string;
  id: string;
  events: T[];
}
