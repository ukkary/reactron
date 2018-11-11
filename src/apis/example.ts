
import request from 'utils/request';
import config from 'config';

const examplesApis = {
  async getSomeData() {
    return request().send({
      method: 'get',
      url: `${ config.urls }/something`,
      params: {}
    });
  },

  async postSomeData() {
    return request().send({
      method: 'post',
      url: `${ config.urls }/something`,
      params: {}
    });
  },
}

export default () => {
  return examplesApis;
}