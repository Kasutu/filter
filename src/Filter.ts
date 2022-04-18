import FilterFind from './abstract/filterFind.abstract';

export default class Filter implements FilterFind {
  public find(...any: any): any[] {
    throw new Error('Method not implemented.');
  }
}
