
import { IConfig } from 'config';

/**
 * Example Config
 */

const config: IConfig = {
  urls: {
    api: "localhost:9000"
  }
}

export default () => {
  return config;
}