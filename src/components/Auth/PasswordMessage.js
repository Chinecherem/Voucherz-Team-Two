import React from 'react';
// import { connect } from 'react-redux';
import { 
  Card,
  Divider 
} from 'semantic-ui-react';
import {Link} from 'react-router-dom'



import NavBar from '../NavBar';

const style={
  page:{
    padding: "20px",
    textAlign: "center"
  }
}
class ConfirmationPage extends React.Component {


  render() {
    return (
       <div className='welcomeContainer'>   
        <div className='container mainContainer'>
          <NavBar />
          <div className='authForm'>
            <Card centered className='vCard' style={style.page}>
              <h1>Password Succesfully Reset</h1>
              <Divider />
              <div>
                  <h4>Click on the link in the mail provided to reset your password </h4>
                 <Link to='/signIn'> <p><small>Back to Sign In</small></p> </Link>
              </div>
            </Card>
          </div>
        </div>     
      </div>
    );  
  }
}

// const mapStateToProps = state => ({
//   form: state.form,
//   auth: state.auth
// })

export default ConfirmationPage