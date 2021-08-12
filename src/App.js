import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/search'>
            <h1>This is the search page</h1>
            {/* Search Page (result ) */}
          </Route>
          <Route path='/'>
            <Home />
            {/* Home (one with the search) */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
