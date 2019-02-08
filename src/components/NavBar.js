import React from 'react';
import { NavLink} from 'react-router-dom';

class NavBar extends React.Component { 

  render() {
    return (
      <nav className='navbar'>
        <ul>
          <li>
            <NavLink className='navbar-brand' to='/'>Voucherz</NavLink>
          </li>
          <li className='navSection'>
            <NavLink className='navLink' to='/signIn'>Sign In</NavLink>
          </li>
        </ul>      
      </nav>  
    );
  }
}

export default NavBar;