import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={ ()=> <MainPage /> } />
      </Switch>
    </Router>
  );
}

export default App;
