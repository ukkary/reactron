
import axios from 'axios';
import config from 'config';

const examplesApis = {
  async getSomeData() {
    return axios({
      method: 'get',
      url: `${ config.urls }/something`,
      params: {}
    });
  },

  async postSomeData() {
    return axios({
      method: 'post',
      url: `${ config.urls }/something`,
      params: {}
    });
  },
}

export default () => {
  return examplesApis;
}