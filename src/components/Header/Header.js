import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from '../GoogleAuth/GoogleAuth';
import styles from './header.module.css';

class Header extends React.Component {
  
  render(){
    return (<div className={styles.myheader}>
      <img src='logo192.png' alt='logo'/>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <div>
        <GoogleAuth />
      </div>
    </div>);
  }
}

export default Header;
