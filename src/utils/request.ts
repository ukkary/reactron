
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Cookies from 'js-cookie';

/**
 * Axios utils
 */
const request = {

  /**
   * headerに認証情報に必要な情報を代入する、axios requestのラッパー
   * @param config Config
   */
  send(config: AxiosRequestConfig): Promise<AxiosResponse> {
    config.headers = config.headers || {};
    config.headers['access-token'] = Cookies.get('access_token');
    return axios.request(config);
  }

};

export {
  AxiosRequestConfig,
  AxiosResponse
};

export default () => {
  return request;
};
