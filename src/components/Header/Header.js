import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../GoogleAuth/GoogleAuth';
import styles from './header.module.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false }
  }
  showNotifications = () => {
    return (
      <div className={styles.notification} id='ntf'>
        <h3>Notifications:</h3>
        <table className={styles.items}>
          <tr>
            <th>
              Today is Rohit's BirthDay
          </th>
          </tr>
          <tr>
            <th>
              Today is Pruthvi's BirthDay
          </th>
          </tr>
          <tr>
            <th>
              Today is abc's BirthDay
          </th>
          </tr>
        </table>
      </div>
    );
  }
  onIconClick = () => {
    this.setState({ clicked: true });
    document.addEventListener('mousedown', this.closeNotificatons);
  }
  closeNotificatons = (e) => {
    if ((e.x < 930 || e.x>1130) || (e.y<75 || e.y>200)) {
      this.setState({ clicked: false });
      document.removeEventListener('mousedown', this.closemenu);
    }
  }
  render() {
    return (
      <div>
        <div className={styles.myheader}>
          <img src='logo192.png' alt='logo' />
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
          <div className={styles.notificationIcon}>
            <svg onClick={this.onIconClick}>
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z"></path>
            </svg>
          </div>
          <div className={styles.googleAuth}>
            <GoogleAuth />
          </div>
        </div >
        {this.state.clicked ? <div>{this.showNotifications()}</div> : ''}
      </div>
    );
  }
}

export default Header;
