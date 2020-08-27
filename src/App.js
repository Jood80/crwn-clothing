import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/signIn-signUp/signIn-signUp.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  // for closing the open sub
  unsubscribeFromAuth = null;

  componentDidMount() {
    // Open substriction  would be change when the user sign in/out
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
