import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component';
import { Route, Switch } from "react-router-dom";
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';




class App extends React.Component {

  constructor(props){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubScribeFromAuth=null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

        });
      }

      this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount(){
    this.unsubScribeFromAuth();
  }

  render(){
  return (
    <div>
    <Header currentUser={this.state.currentUser}/>
    <Switch>
        <Route exact  path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
     </div>);
}
}
export default App;
