import React from 'react';
import { connect } from 'react-redux';
import { 
  Card,
  Divider
} from 'semantic-ui-react';

import {Link} from "react-router-dom";

import NavBar from '../NavBar';
import SignInForm from './SignInForm';


const style={
  b:{
    margin: "auto",
    display: "block",
    width: "50%",
    marginBottom: "10px"
  }
}

class SignIn extends React.Component {

  state = { loading: false, error: '' };

  // onSubmit = (values) => {
  //   this.setState({ loading: true });
  //   this.props.signIn(values);
  // }

  // componentWillReceiveProps(nextProps) {
  //   const { loggedIn } = nextProps.auth;
    
  //   if (!loggedIn) {
  //     this.setState({ error: nextProps.auth.error });
  //   }
  // }

  renderError = () => {
    if (this.state.error !== '') {
      return <p className='error text-center'>{this.state.error}</p>;
    }
  }

  render() {
    return (
       <div className='welcomeContainer'>   
        <div className='container mainContainer'>
          <NavBar />
          <div className='authForm'>
            <Card centered className='vCard'>
              <h1>Sign In</h1>
              <Divider />
              {this.renderError()}
              <SignInForm onSubmit={this.onSubmit} />
              <Link to="/signUp" className="ui button btnCommon btnPrimary" style={style.b}>Register</Link>
              {/* <Link to="/passwordChange" className=" btnCommon btnPrimary" style={style.b}>Forgot Password?</Link> */}
            </Card>
          </div>
        </div>     
      </div>
    );  
  }
}

const mapStateToProps = state => ({
  form: state.form,
  auth: state.auth
})

export default connect(mapStateToProps)(SignIn);