import { action, computed, observable, runInAction } from 'mobx';

import examplesApis from '../apis/example';

interface ISampleObject {
  name?: string;
  age?: number;
}

export default class ExampleStore {

  /**
   * Example for observable number
   */
  @observable public sampleNumber: number = 2;

  /**
   * Example for observable object
   */
  @observable public sampleData: ISampleObject = {};

  /**
   * Example for computed function
   */
  @computed public get doubleSampleNumber() {
    return this.sampleNumber * 2;
  }

  /**
   * Example for fetch some data from server
   */
  @action.bound public async fetchSampleData() {
    const res = await examplesApis().getSomeData();
    runInAction(() => {
      this.sampleData.name = res.data.name;
      this.sampleData.age = res.data.age;
    })
  }
}