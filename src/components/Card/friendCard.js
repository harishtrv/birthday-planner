import React from 'react';
import history from '../../history';
import { Link } from 'react-router-dom';
import styles from './card.module.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false }
  }
  editFriend = () => {
    history.push('/edit');
  }
  rendermenu = (e) => {
    this.setState({ clicked: !this.state.clicked });
    e.stopPropagation();
    document.addEventListener('mousedown', this.closemenu);
  }

  closemenu = (e) => {
    if (e.target.text !== 'Book Hotel') {
      this.setState({ clicked: false });
      document.removeEventListener('mousedown', this.closemenu);
    }
  }
  render() {
    return (
      <div className={styles.card}>
        {this.state.clicked ?
          (<div className={styles.menu}>
            <a className={styles.menuitems} href='https://www.zomato.com/bangalore/dine-out'>
              Book Hotel
          </a>
          </div>) : ''}
        <div className={styles.details}>
          <div className={styles.threedots} onClick={this.rendermenu}></div>
          <div className={styles.name}>
            {this.props.friend.userName}
          </div>
          <div className={styles.contact}>
            Contact : {this.props.friend.contactNo}
          </div>
          <div className={styles.dob}>
            Birthday : {this.props.friend.DOB}
          </div>
          <Link className={styles.grpButton} to={`/grpchat/${this.props.friend.userName}`}>{this.props.friend.isgrpExists ? "Open Group" : "Create Group"}</Link>
        </div>
        <div className={styles.twinbuttons}>
          <Link className={styles.edit} to={`/chat/${this.props.friend.userName}`}>Chat</Link>
          {
            this.props.isFriend ?
              <Link className={styles.delete} to={`/remove/${this.props.friend.userName}`}>Remove</Link>
              :
              <Link className={styles.add} to={`/add/${this.props.friend.userName}`}>Add</Link>
          }
        </div>
      </div>
    );
  }
}

export default Card;
