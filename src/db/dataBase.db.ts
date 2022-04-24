import EventList from './eventList.db';
import OrgList from './orgList.db';
import SchoolList from './schoolsList.db';
import UserList from './usersList.db';

export default function DataBase() {}

export const events = new EventList();
export const users = new UserList();
export const org = new OrgList();
export const school = new SchoolList();

events.makeData(10);
users.makeData(10);
org.makeData(15);
school.makeData(10);
