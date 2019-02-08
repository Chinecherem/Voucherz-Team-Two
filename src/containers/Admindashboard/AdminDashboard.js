import React from 'react';
import { Route } from 'react-router-dom';
import Menu from './Menu'
import Auditory from './Audittrails';
import RedemptionMgt from './RedemptionMgt';
import SessionMgt from './SessionMgt';
import UserMgt from './UserMgt';
import VoucherMgt from './VoucherMgt/VoucherMgt';
import TokenMgt from "./TokenMgt";



// const style={
//     position: "fixed"
// }
const AdminDashboard = () => 
  <div className='fluid-container'>
    <div className='row'>
      <div className='aside col-md-2 col-sm-3 sidebarMenu'>
      <Menu />  
      </div>
      <div className='main col-md-10'>       
        <div className='fluid-container'>
          <Route exact path='/admin' component={Auditory} />
          <Route path='/admin/redemptionmgt' component={RedemptionMgt} />
          <Route path='/admin/sessionmgt' component={SessionMgt} />
          <Route path='/admin/usermgt' component={UserMgt} />
          <Route path='/admin/vouchermgt' component={VoucherMgt} />
          <Route path="/admin/tokenmgt" component={TokenMgt} />
        </div>
      </div> 
    </div> 
  </div>;

export default AdminDashboard;