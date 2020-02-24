import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { Route, Switch, Redirect } from 'react-router-dom';

import { currentUserSelector } from '../redux/user/user-selectors';
import { checkUserSession } from '../redux/user/user-actions'

import Header from '../components/Header/Header';
import HomePage from '../pages/HomePage/HomePage';
import ShopPage from '../pages/shop/ShopPage';
import SigninAndSignupPage from '../pages/signin-signup-page/SigninAndSignupPage';
import CheckoutPage from '../pages/checkout/CheckoutPage';
import Footer from '../components/Footer/Footer';


import { GlobalStyle } from './GlobalStyle';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])


  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SigninAndSignupPage />)} />
      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
}) 


export default connect(mapStateToProps, mapDispatchToProps)(App);
