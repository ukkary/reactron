
import { IConfig } from 'config';

/**
 * Example Config
 */
const config: IConfig = {
  urls: {
    api: process.env.API_URL || ''
  }
}

export default () => {
  return config;
}