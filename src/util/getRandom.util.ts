export default class GetRandom {
  public getRandom<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }
}
