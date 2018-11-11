
import * as lstore from 'store';

export interface IHistory {
  keyword: string;
}

/**
 * Localstorage utils
 */
const localStorage = {

  /**
   * Example for Get data
   */
  getHistory: (): IHistory[] => {
    const data = lstore.get('history');
    if (!data) {
      return [];
    }
    return data;
  },

  /**
   * Example for Set data
   */
  setHistory: (keywords: string) => {
    lstore.set('history', keywords)
  }
};

export default () => {
  return localStorage;
};