import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';

export default class  Home extends React.Component {
  render() {
    return (
      <div className='welcomeContainer'>   
        <div className='container mainContainer'>
          <NavBar />
           <section className='welcome'>
            <div className='content col-md-6 col-sm-12'>
              <h1 className='white'>Welcome to Voucherz</h1>
              <Link className='btnCommon btnWhite' to='/signUp'>CREATE AN ACCOUNT</Link>
              <Link className="btnCommon btnWhite" to="/signIn">ALREADY HAVE AN ACCOUNT?</Link>
            </div>
          </section>
        </div>     
      </div> 
    );
  }
}