import DateTime24h from './dateTime24h.type';

type loginInfo = {
  login: boolean;
  logout: boolean;
  late: boolean;
  UID: string;
  loginTime: DateTime24h | undefined;
  logoutTime: DateTime24h | undefined;
};

export default loginInfo;
