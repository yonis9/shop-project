import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SigninAndSignupPage from './pages/signin-signup-page/SigninAndSignupPage'
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase';


class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })

      } else {
        this.setState({ currentUser: userAuth})
      }
      


      console.log(userAuth)
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render () {
    console.log(this.state)
    const { currentUser } = this.state
    return (
      <div>
        <Header currentUser={currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SigninAndSignupPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
