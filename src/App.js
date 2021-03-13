import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import About from './Pages/About';

function Nav() {
  return (
    <div>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/about">About</Link></div>
    </div>
  );
} 

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
