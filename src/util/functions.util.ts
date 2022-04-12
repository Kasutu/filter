export default function getRandom(array: any[]): any {
  return array[Math.floor(Math.random() * (array.length - 0 + 1) + 0)];
}
