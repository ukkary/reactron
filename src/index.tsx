import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import * as rootStore from './stores/RootStore';
import App from './components/app';

ReactDOM.render(
  <Provider rootStore={ rootStore }>
    <App />
  </Provider>,
  document.getElementById('root')
);