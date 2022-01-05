import React from 'react';
import history from '../../history';
import { Link } from 'react-router-dom';
import styles from './card.module.css';

class Card extends React.Component {
  editFriend = () => {
    history.push('/edit');
  }
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.details}>
          <div className={styles.name}>
            {this.props.friend.name}
          </div>
          <div className={styles.contact}>
            Contact : {this.props.friend.contact}
          </div>
          <div className={styles.dob}>
            Birthday : {this.props.friend.birthday}
          </div>
          <button className={styles.grpButton}>{this.props.friend.isgrpExists ? "Open Group" : "Create Group"}</button>
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
