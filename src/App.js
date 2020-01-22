import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SigninAndSignupPage from './pages/signin-signup-page/SigninAndSignupPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { currentUserSelector } from './redux/user/user-selectors'

import { setCurrentUser } from './redux/user/user-actions'

import './App.css';

class App extends Component {

  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })

      } else {
        setCurrentUser(userAuth)
      }
      


      console.log(userAuth)
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render () {
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SigninAndSignupPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
