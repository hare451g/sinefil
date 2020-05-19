import React from 'react';
import { Router } from '@reach/router';
import { Provider as ReduxProvider } from 'react-redux';

import store from '../../store';

// containers | Pages
import DetailPage from '../DetailPage';
import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';
import GlobalStyle from '../../components/GlobalStyle';

function App() {
  return (
    <ReduxProvider store={store}>
      <GlobalStyle />
      <Router>
        <DetailPage path="/details/:id" />
        <HomePage path="/" />
        <NotFoundPage path="*" />
      </Router>
    </ReduxProvider>
  );
}

export default App;
