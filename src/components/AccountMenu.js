import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

class AccountMenu extends React.Component {

  signoutHandler =() => {
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      localStorage.removeItem("admin")
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