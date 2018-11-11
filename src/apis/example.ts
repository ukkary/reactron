import axios from 'axios';

const examplesApis = {
  async getSomeData() {
    return axios({
      method: 'get',
      url: `http://localhost`,
      params: {}
    });
  },

  async postSomeData() {
    return axios({
      method: 'post',
      url: `http://localhost`,
      params: {}
    });
  },
}

export default () => {
  return examplesApis;
}