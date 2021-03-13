import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import './App.css';

import Nav from './Nav';

function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
      </Router>
    </div>
  );
}

export default App;
