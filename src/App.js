import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Route, Switch } from 'react-router-dom'


const HatsPage = () => (
  <div>
    <h1>Hats</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
