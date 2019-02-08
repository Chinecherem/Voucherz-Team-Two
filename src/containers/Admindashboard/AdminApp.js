// import React from 'react';
// import { connect } from 'react-redux';
// import { Route, withRouter, Redirect } from 'react-router-dom';
// import Home from '../Home';
// import SignIn from '../../components/Auth/SignIn';
// import SignUp from '../../components/Auth/SignUp';
// import ConfirmationPage from "../../components/Auth/ConfirmationPage"
// import ChangePassword from '../../components/Auth/ChangePassword';
// import ConfirmAccount  from "../../components/Auth/ConfirmAccount";
// import AdminDashboard from "./AdminDashboard";

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const auth = localStorage.getItem('token') ? true : false;
//   return (
//     <Route
//       {...rest}
//       render={props => auth 
//       ? <Component {...props} />
//       : <Redirect to={{ pathname: "/signIn", state: { from: props.location}}} />}
//     />
//   );
// }


// class App extends React.Component {

  


//   render()  {
//       return (
//         <div>
//           <Route  exact path='/' component={Home} />
//           <Route   path='/signIn' component={SignIn}/>
//           <Route    path='/signUp' component={SignUp} />
//           <Route  path="/confirmationPage" component={ConfirmationPage} />
//           <Route    path="/passwordChange" component={ChangePassword} />
//           <Route  path="/confirmAccount" component={ConfirmAccount} />
//      a     <ProtectedRoute    path="/admin" component={AdminDashboard} />
//         </div>
//       )
//       // }
//     }
 
// }

// const mapStateToProps = (state) => ({
//   auth: state.auth
// });


// export default withRouter(connect(mapStateToProps)(App));