import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { connect } from 'react-redux'
import { setSignOut } from '../../actions/index';
import history from '../../history';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }
  showNotifications = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const birthdayList = this.props.friends.filter(friend => {
      const dateMonth = friend.DOB.split('/');
      if (dateMonth[0] === mm && dateMonth[1] === dd) {
        return true;
      }
      return false;
    });
    if (birthdayList.length === 0) {
      return (
        <div className={styles.notification} id='ntf'>
          <h3>Notifications:</h3>
          <table className={styles.items}>
            <tr>
              <th>
                No BirthDay's Today
              </th>
            </tr>
          </table>
        </div>
      );
    }
    return (
      <div className={styles.notification} id='ntf'>
        <h3>Notifications:</h3>
        <table className={styles.items}>
          {this.renderReminders(birthdayList)}
        </table>
      </div>
    );
  }
  renderReminders = (birthdayList) => {
    return birthdayList.map(friend => {
      return (
        <tr>
          <th>
            {friend.userName.charAt(0).toUpperCase() + friend.userName.slice(1)}'s BirthDay Today
          </th>
        </tr>
      );
    })
  }
  onIconClick = () => {
    this.setState({ clicked: true });
    document.addEventListener('mousedown', this.closeNotificatons);
  }
  closeNotificatons = (e) => {
    if (document.getElementById('ntf')) {
      const leftPosition = document.getElementById('ntf').offsetLeft;
      const topPosition = document.getElementById('ntf').offsetTop;
      if ((e.x < leftPosition || e.x > leftPosition + document.getElementById('ntf').offsetWidth)
        || (e.y < topPosition || e.y > topPosition + document.getElementById('ntf').offsetHeight)) {
        this.setState({ clicked: false });
        document.removeEventListener('mousedown', this.closemenu);
      }
    }
  }
  signOut = async () => {
    await this.props.setSignOut();
    sessionStorage.clear();
    history.push('/');
  }
  render() {
    return (
      <div>
        <div className={styles.myheader}>
          <div className={styles.logo}>
            <img src='logo192.png' alt='logo' />
            <div className={styles.title}>
              <span>Birthday Planner</span>
            </div>
          </div>
          {this.props.isSignedIn ?
            (
              <ul className={styles.floatRight}>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <h3 onClick={this.signOut}>SignOut</h3>
                </li>
                <li>
                  <div className={styles.notificationIcon}>
                    <svg onClick={this.onIconClick}>
                      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z"></path>
                    </svg>
                  </div>
                </li>
              </ul>
            ) : null}
        </div >
        {this.state.clicked && this.props.isSignedIn ? <div>{this.showNotifications()}</div> : ''}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.user.isSignedIn, friends: Object.values(state.friends), userName: state.user.userName };
}
export default connect(mapStateToProps, { setSignOut })(Header);