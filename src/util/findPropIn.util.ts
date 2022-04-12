export default function findPropIn(prop: string, interfaceName: any): boolean {
  return prop in interfaceName;
}
