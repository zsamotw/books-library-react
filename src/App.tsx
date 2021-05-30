import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RootComponent from './components/RootComponent';
import Store from './components/Store';

function App() {
  return (
    <Router>
      <Store>
        <RootComponent />
      </Store>
    </Router>
  );
}

export default App;
