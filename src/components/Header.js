import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

class Header extends React.Component {
  
  render(){
    return (<div className='ui secondary pointing menu'>
      <img src='logo192.png' className='ui mini image'/>
      <Link to='/' className='item'>Home</Link>
      <div className='right menu'>
        <GoogleAuth />
      </div>
    </div>);
  }
}

export default Header;
