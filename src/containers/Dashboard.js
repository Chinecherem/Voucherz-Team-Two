import React from 'react';
import { Route } from 'react-router-dom';

import Menu from './Menu';
import Main from './Main';
import Profile from './Profile';
// import Campaign from './Campaign';
import Voucher from './Voucher';
import Customers from './Customers';
import Redemption from './Redemption';
import CreateVoucher from './VoucherCreation/VoucherCreate';
import {token} from "../components/AccessToken"


const style={
    position: "fixed"
}
// let key = localStorage.getItem('token')

class Dashboard extends React.Component{

 

  render(){
    return(
      <div className='fluid-container'>
      <div className='row'>
        <div className='aside col-md-2 col-sm-3 sidebarMenu'>
          <Menu style={style} />
        </div>
        <div className='main col-md-10'>       
          <div className='fluid-container'>
            <Route exact path={`/merchant/${token}`} component={Main} />
            <Route path={`/merchant/profile/${token}`} component={Profile} />
            <Route path={`/merchant/voucher/${token}`} component={Voucher} />
            <Route path={`/merchant/customers/${token}`} component={Customers} />
            <Route path={`/merchant/redemption/${token}`} component={Redemption} />
    
            <Route path={`/merchant/createvoucher/${token}`} component={CreateVoucher} />
          </div>
        </div> 
      </div> 
    </div>
    )
  }
}

export default Dashboard;