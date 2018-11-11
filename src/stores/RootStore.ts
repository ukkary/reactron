
import ExampleStore from 'stores/ExampleStore';
import UserStore from 'stores/UserStore';

/**
 * Root Store Class
 */
export class RootStore {

  public exampleStore: ExampleStore;
  public userStore: UserStore;

  constructor() {
    this.exampleStore = new ExampleStore();
    this.userStore = new UserStore();
  }
}

const rootStore = new RootStore();
export default rootStore;
