
import ExampleStore from './ExampleStore';

/**
 * Root Store Class
 */
export default class RootStore {
  public exampleStore: ExampleStore;

  constructor() {
    this.exampleStore = new ExampleStore();
  }

  public deleteStoresExceptPages() {
    delete this.exampleStore;
  }
}

export {
  ExampleStore
};
