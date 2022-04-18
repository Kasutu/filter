export default function findPropIn(prop: string, obj: any): boolean {
  return obj[prop] !== undefined;
}
