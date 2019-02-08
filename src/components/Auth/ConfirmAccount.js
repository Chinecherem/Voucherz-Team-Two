import React from 'react';
// import { connect } from 'react-redux';
import { 
  Card,
  Divider 
} from 'semantic-ui-react';
import {Link} from "react-router-dom";

import NavBar from '../NavBar';
// import SignInForm from './SignInForm';


const style={
  b:{
    margin: "auto",
    display: "block",
    width: "50%",
    marginBottom: "10px"
  }
}

class ConfirmAccount extends React.Component {

  constructor(props){
    super(props)

    this.state = { loading: false, error: '' }
  }

  
  render() {
    return (
       <div className='welcomeContainer'>   
        <div className='container mainContainer'>
          <NavBar />
          <div className='authForm'>
            <Card centered className='vCard'>
              <h1>Successful Registration</h1>
              <Divider />
              <Link to="/signIn" className="ui button btnCommon btnPrimary" style={style.b}>Log In</Link>
            </Card>
          </div>
        </div>     
      </div>
    );  
  }
}


export default ConfirmAccount;