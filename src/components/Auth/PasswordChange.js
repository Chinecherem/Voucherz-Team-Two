import React from 'react';
import { connect } from 'react-redux';
import { 
  Card,
  Divider 
} from 'semantic-ui-react';

import { passwordChange } from '../../actions';
import NavBar from '../NavBar';
import PasswordChangeForm from './PasswordResetForm';

class PasswordChange extends React.Component {

  state = { loading: false, error: '' };

  onSubmit = (values) => {
    this.setState({ loading: true });
    this.props.passwordChange(values);
  }

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
              <h1>Change Your Password</h1>
              <Divider />
              {this.renderError()}
              <PasswordChangeForm onSubmit={this.onSubmit} />
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

export default connect(mapStateToProps, { passwordChange } )(PasswordChange);