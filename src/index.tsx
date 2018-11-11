import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

// import * as RootStore from './stores/RootStore';
import ExampleStore from './stores/exampleStore';
import App from './components/app';

ReactDOM.render(
  <Provider exampleStore={ new ExampleStore() }>
    <App />
  </Provider>,
  document.getElementById('root')
);