import React from 'react';

import MenuItem from './MenuItem';


class Menu extends React.Component {

  state = { open: false };

  render()  {
    return (
      <div>
        <div className='brand'>
          <h2 className='title'>Voucherz</h2>
        </div>
        <ul>
          <MenuItem link='/admin' linkText='Audit Trails' iconName='tachometer' />
          <MenuItem link='/admin/redemptionmgt' linkText='Redemption Management' iconName='cog' />
          <MenuItem link='/admin/sessionmgt' linkText='Session Management' iconName='shopping-cart' />
          <MenuItem link='/admin/usermgt' linkText='User Management' iconName='list' />
          <MenuItem link='/admin/vouchermgt' linkText='Voucher Management' iconName='group' />
          <MenuItem link='/admin/tokenmgt' linkText='Token Management' iconName='group' />
        </ul> 
      </div>
      
    );
  }
}

export default Menu;