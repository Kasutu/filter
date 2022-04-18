import OrgPosition from '../enum/orgPosition.enum';

export default class OrgData {
  readonly name: string[] = ['PSSE', 'GDSC'];
  readonly id: string[] = ['lpoeuKugAz', 'lKhslCEMe2'];
  readonly position: OrgPosition[] = [
    OrgPosition.Ambassador,
    OrgPosition.Auditor,
    OrgPosition.Member,
    OrgPosition.President,
    OrgPosition.Representative,
    OrgPosition.Secretary,
    OrgPosition.VicePresident,
    OrgPosition.treasurer,
  ];
}
