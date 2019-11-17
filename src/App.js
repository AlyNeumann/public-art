import React from 'react';
import Home from './Home';
import Map from './Map';
import Nav from './Nav';
import List from './List';
import dotenv from 'dotenv';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';



function App() {
  dotenv.config();
  return (
    <Router>
    <div className="App">
      <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/map" exact component={Map} />
          <Route path="/list" exact component={List} />
        </Switch>
    </div>
    </Router>
  )

}

export default App;
