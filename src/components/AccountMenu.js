import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
// import { signOut } from '../actions';

// import auth from '../components/Auth/RequireAuth'

class AccountMenu extends React.Component {

  signoutHandler =() => {
      localStorage.removeItem('token')
      this.props.history.push("/")
  }

  render() {
    return (          
      <div className='accountMenu'>
        <button className='btnCommon btnOutline' onClick={this.signoutHandler}
        >Sign Out</button>
      </div>  
    );
  }
}

const mapsStateToProps = state => ({
  auth: state.auth
});

export default withRouter(connect(mapsStateToProps)(AccountMenu));