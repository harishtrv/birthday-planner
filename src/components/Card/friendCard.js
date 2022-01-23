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
    if (e.target.text != 'Open Chat') {
      this.setState({ clicked: false });
      document.removeEventListener('mousedown', this.closemenu);
    }
  }
  render() {
    return (
      <div className={styles.card}>
        {this.state.clicked ?
          (<div className={styles.menu}>
            <Link className={styles.menuitems} to='./chat'>
              Open Chat
          </Link>
          </div>) : ''}
        <div className={styles.details}>
          <div className={styles.threedots} onClick={this.rendermenu}></div>
          <div className={styles.name}>
            {this.props.friend.name}
          </div>
          <div className={styles.contact}>
            Contact : {this.props.friend.contact}
          </div>
          <div className={styles.dob}>
            Birthday : {this.props.friend.birthday}
          </div>
          <Link className={styles.grpButton} to={`/grpchat/${this.props.friend.id}`}>{this.props.friend.isgrpExists ? "Open Group" : "Create Group"}</Link>
        </div>
        <div className={styles.twinbuttons}>
          <Link className={styles.edit} to={`/edit/${this.props.friend.id}`}>Edit</Link>
          <Link className={styles.delete} to={`/delete/${this.props.friend.id}`}>Delete</Link>
        </div>
      </div>
    );
  }
}

export default Card;
