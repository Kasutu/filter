import filterFindAbstract from './abstract/filterFind.abstract';

export default class Filter implements filterFindAbstract {
  public find(...any: any): any[] {
    throw new Error('Method not implemented.');
  }
}
