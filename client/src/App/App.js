import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { Route, Switch, Redirect } from 'react-router-dom';

import { currentUserSelector } from '../redux/user/user-selectors';
import { checkUserSession } from '../redux/user/user-actions'

import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import BrokenPage from '../components/BrokenPage/BrokenPage';
import Header from '../components/Header/Header';
import Spinner from '../components/Spinner/Spinner';
import Footer from '../components/Footer/Footer';

import { GlobalStyle } from './GlobalStyle';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const ShopPage = lazy(() => import('../pages/shop/ShopPage'));
const SigninAndSignupPage = lazy(() => import('../pages/signin-signup-page/SigninAndSignupPage'));
const CheckoutPage = lazy(() => import('../pages/checkout/CheckoutPage'));


export const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])


  return (
    <div>
      <GlobalStyle />
      <Header />
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <ScrollToTop />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SigninAndSignupPage />)} />
              <Route component={BrokenPage} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
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
