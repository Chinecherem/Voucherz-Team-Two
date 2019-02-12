import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';
import ConfirmationPage from "../components/Auth/ConfirmationPage"
import ChangePassword from '../components/Auth/ChangePassword';
import ConfirmAccount  from "../components/Auth/ConfirmAccount";
import AdminDashboard from "./Admindashboard/AdminDashboard";


const ProtectedRoute = ({ component: Component, ...rest }) => {
   const auth = (localStorage.getItem('token')) ? true : false;
  return (
    <Route
      {...rest}
      render={props => auth 
      ? <Component {...props} />
      : <Redirect to={{ pathname: "/signIn", state: { from: props.location}}} />}
    />
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth =  localStorage.getItem('admin') ? true : false;
  return (
    <Route
      {...rest}
      render={props => auth 
      ? <Component {...props} />
      : <Redirect to={{ pathname: "/signIn", state: { from: props.location}}} />}
    />
  );
}


class App extends React.Component {
    state={
      loggedIn: false
    }


  componentWillMount(){
    let admin = localStorage.getItem("admin")
    let merchant = localStorage.getItem("token")
    if(merchant !== null){
      this.props.history.push("/merchant")
    }
    else if(admin !== null){
      this.props.history.push("/admin")
    }
    else if(admin === null && merchant === null){
      this.props.history.push("signIn")
    }
  }

  render()  {
      return (
        <Switch>
          <Route  exact path='/' component={Home} />
          <Route   path='/signIn' component={SignIn}/>
          <Route    path='/signUp' component={SignUp} />
          <Route  path="/confirmationPage" component={ConfirmationPage} />
          <Route    path="/passwordChange" component={ChangePassword} />
          <Route  path="/confirmAccount" component={ConfirmAccount} />
          <ProtectedRoute   path="/merchant" component={Dashboard} />
          <PrivateRoute  path="/admin" component={AdminDashboard} />
        </Switch>
      )
    }
 
}

const mapStateToProps = (state) => ({
  auth: state.auth
});


export default withRouter(connect(mapStateToProps)(App));