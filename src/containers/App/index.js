import React from 'react';
import { Router } from '@reach/router';

// containers | Pages
import DetailPage from '../DetailPage';
import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';

function App() {
  return (
    <Router>
      <DetailPage path="/details/:id" />
      <HomePage path="/" />
      <NotFoundPage path="*" />
    </Router>
  );
}

export default App;
