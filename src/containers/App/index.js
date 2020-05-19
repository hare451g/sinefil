import React from 'react';
import { Router } from '@reach/router';
import { Provider as ReduxProvider } from 'react-redux';

import store from '../../store';

// containers | Pages
import DetailPage from '../DetailPage';
import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <DetailPage path="/details/:id" />
        <HomePage path="/" />
        <NotFoundPage path="*" />
      </Router>
    </ReduxProvider>
  );
}

export default App;
