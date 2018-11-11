
import dev from 'config/dev';
import prd from 'config/prd';

export interface IConfig {
  urls: {
    api: string;
  }
}

const get = (): IConfig => {
  switch (process.env.NODE_ENV) {
    case 'production': {
      return prd();
    }
    default: {
      return dev();
    }
  }
};

export default get();