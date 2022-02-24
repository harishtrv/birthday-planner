import React from 'react';
import Modal from '../Modal/modal';
import history from '../../history';
import { addFriend } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './addfriend.module.css';

class AddFriend extends React.Component {

  renderActions() {
    const { userName } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.addFriend(this.props.userName, userName)}
          className={styles.positivebtn}>
          Confirm
        </button>
        <Link to='/ShowFriendSuggestion' className={styles.neutralbtn}>Cancel</Link>
      </React.Fragment>
    );
  }
  renderContent() {
    return `Are you sure want to Add this Friend with Name: ${this.props.match.params.userName} ?`
  }
  render() {

    return (
      <Modal
        title="Add Friend"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/ShowFriendSuggestion')}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return { userName: state.user.userName }
};

export default connect(mapStateToProps, { addFriend })(AddFriend);