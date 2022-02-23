import React from 'react';
import Modal from '../Modal/modal';
import history from '../../history';
import { deleteFriend } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './deletefriend.module.css';

class DeleteFriend extends React.Component {

  renderActions() {
    const { userName } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteFriend(this.props.userName, userName)}
          className={styles.negativebtn}>
          Remove
        </button>
        <Link to='/cards' className={styles.neutralbtn}>Cancel</Link>
      </React.Fragment>
    );
  }
  renderContent() {
    if (!this.props.friend) {
      return '"Are you sure want to remove this Friend ?"'
    }
    return `Are you sure want to remove this Friend with Name: ${this.props.friend.userName} ?`
  }
  render() {

    return (
      <Modal
        title="Remove Friend"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { friend: state.friends[ownProps.match.params.userName], userName: state.user.userName }
};

export default connect(mapStateToProps, { deleteFriend })(DeleteFriend);