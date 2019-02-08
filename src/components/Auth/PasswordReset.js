import React from 'react';
import { connect } from 'react-redux';
import { 
  Card,
  Divider 
} from 'semantic-ui-react';

import { passwordReset } from '../../actions';
import NavBar from '../NavBar';
import PasswordResetForm from './PasswordResetForm';
import {Redirect} from 'react-router-dom';

class PasswordReset extends React.Component {

  state = {  error: '', redirect: false };

  onSubmit = (values) => {
    this.props.passwordReset(values);
    this.setState({redirect: true})
  }


  renderError = () => {
    if (this.state.error !== '') {
      return <p className='error text-center'>{this.state.error}</p>;
    }
  }

  changeHandler = (e) =>{
      this.setState({email: e.target.value})
  }

  render() {
    const {redirect} = this.state
    if (redirect){
      return <Redirect to="/successreset" />
    }
    return (
       <div className='welcomeContainer'>   
        <div className='container mainContainer'>
          <NavBar />
          <div className='authForm'>
            <Card centered className='vCard'>
              <h1>Reset Password</h1>
              <Divider />
              {this.renderError()}
              <PasswordResetForm onSubmit={this.onSubmit} value={this.state.email} changeMail={this.changeHandler} />
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

export default connect(mapStateToProps, { passwordReset } )(PasswordReset);