export default class NullChecker {
  public isObjPropsNullish(obj: any): boolean {
    return Object.values(obj).every((value) => {
      if (value === null || value === undefined) {
        return true;
      }
      return false;
    });
  }

  public isPropNullish(prop: any): boolean {
    if (prop === null || prop === undefined) {
      return true;
    }

    return false;
  }

  public async fixNullishProp(
    boolean: boolean,
    ...truthySetter: any
  ): Promise<void> {
    if (boolean) {
      truthySetter;
    }
    return;
  }
}
