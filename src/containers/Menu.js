import React from 'react';

import MenuItem from '../components/MenuItem';


class Menu extends React.Component {

  state = { open: false };

  render()  {
    return (
      <div>
        <div className='brand'>
          <h2 className='title'>Voucherz</h2>
        </div>
        <ul>
          <MenuItem link="/merchant/" linkText='Dashboard' iconName='tachometer' />
          <MenuItem link="/merchant/createvoucher" linkText="Create Voucher" iconName="plus" />
          <MenuItem link="/merchant/profile" linkText='Profile' iconName='user' />
          <MenuItem link="/merchant/voucher" linkText='Voucher' iconName='gift' />
          <MenuItem link="/merchant/redemption" linkText='Redemption' iconName='list' />
        </ul> 
      </div>
      
    );
  }
}

export default Menu; 