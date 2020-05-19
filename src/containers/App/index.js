import React from 'react';
import { Router } from '@reach/router';

// containers | Pages
import DetailPage from '../DetailPage';
import HomePage from '../HomePage';

function App() {
  return (
    <Router>
      <DetailPage path="/details/:id" />
      <HomePage path="/" />
    </Router>
  );
}

export default App;
