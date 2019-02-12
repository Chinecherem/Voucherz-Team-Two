import React from 'react';
import { Route } from 'react-router-dom';

import Menu from './Menu';
import Main from './Main';
import Profile from './Profile';
import Voucher from './Voucher';
import Redemption from './Redemption';
import CreateVoucher from './VoucherCreation/VoucherCreate';


const style={
    position: "fixed"
}

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
             <Route exact path="/merchant/" component={Main} />
             <Route path="/merchant/profile" component={Profile} />
             <Route path="/merchant/voucher" component={Voucher} />
             <Route path="/merchant/redemption"component={Redemption} />
             <Route path="/merchant/createvoucher" component={CreateVoucher} />
          </div>
        </div> 
      </div> 
    </div>
    )
  }
}

export default Dashboard;