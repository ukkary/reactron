
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import App from 'components/app';
import * as rootStore from 'stores/RootStore';

ReactDOM.render(
  <Provider rootStore={ rootStore }>
    <App />
  </Provider>,
  document.getElementById('root')
);