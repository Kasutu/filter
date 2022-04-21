export default class FindPropIn {
  public findPropIn(prop: string, obj: any): boolean {
    return obj[prop] !== undefined;
  }
}
