export default class GetRandom {
  public getRandom<T>(array: T[], qty?: number): T;
  public getRandom<T>(array: T[], qty?: number): T[];

  public getRandom<T>(array: T[], qty?: number): T | T[] {
    if (qty !== undefined) {
      const arr: T[] = [];

      for (let i = 0; i < qty; i++) {
        arr.push(array[Math.floor(Math.random() * array.length)]);
      }

      return arr;
    } else {
      return array[Math.floor(Math.random() * array.length)];
    }
  }
}
