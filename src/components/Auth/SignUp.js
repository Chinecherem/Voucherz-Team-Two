import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import { 
  Card,
  Divider 
} from 'semantic-ui-react';
// import { createUser } from '../../actions';


import NavBar from '../NavBar';
import SignUpForm from './SignUpForm';

class SignUp extends React.Component {

  // constructor(props){
  //   super(props)
  // }

  state = { redirect: false, error: '', token: "" };

  onSubmit = () => {
   
   }

  renderError = () => {
    if (this.state.error !== '') {
      return <p className='error text-center'>{this.state.error}</p>;
    }
  }

  render() {
    const {redirect} = this.state
    if (redirect){
      return <Redirect to="/confirmationPage" />
    }
    return (
       <div className='welcomeContainer'>   
        <div className='container mainContainer'>
          <NavBar />
            <div className='authForm'>
            <Card centered className='vCard'>
              <h1>Register</h1>
              <Divider />
              {this.renderError()}
              <SignUpForm onSubmit={this.onSubmit} />
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

export default connect(mapStateToProps)(SignUp);