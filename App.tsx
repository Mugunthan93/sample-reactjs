import * as React from 'react';
import Signup from './components/signup/signup';
import './app.scss';
import './style.css';

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Signup />
    </Provider>
  );
};

export default App;
