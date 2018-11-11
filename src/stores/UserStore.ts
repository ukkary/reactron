
import { observable } from 'mobx';

interface IUser {
  id: string | null;
  name?: string;
}

export default class UserStore {

  /**
   * Example for observable number
   */
  @observable public user: IUser = {
    id: null
  }
}