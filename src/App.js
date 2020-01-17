import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SigninAndSignupPage from './pages/signin-signup-page/SigninAndSignupPage'
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SigninAndSignupPage} />
      </Switch>
    </div>
  );
}

export default App;
