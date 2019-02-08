import React from 'react';

import MenuItem from '../components/MenuItem';
import {token} from '../components/AccessToken'


class Menu extends React.Component {

  state = { open: false };

  render()  {
    return (
      <div>
        <div className='brand'>
          <h2 className='title'>Voucherz</h2>
        </div>
        <ul>
          <MenuItem link={`/merchant/${token}`} linkText='Dashboard' iconName='tachometer' />
          <MenuItem link={`/merchant/profile/${token}`} linkText='Profile' iconName='cog' />
          <MenuItem link={`/merchant/voucher/${token}`} linkText='Voucher' iconName='shopping-cart' />
          <MenuItem link={`/merchant/redemption/${token}`} linkText='Redemption' iconName='list' />
        </ul> 
      </div>
      
    );
  }
}

export default Menu;