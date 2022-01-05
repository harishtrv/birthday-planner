import React from 'react';
import Modal from '../Modal/modal';
import history from '../../history';
import { fetchFriend, deleteFriend } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './deletefriend.module.css';

class DeleteFriend extends React.Component {
  componentDidMount() {
    this.props.fetchFriend(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteFriend(id)}
          className={styles.negativebtn}>
          Delete
        </button>
        <Link to='/cards' className={styles.neutralbtn}>Cancel</Link>
      </React.Fragment>
    );
  }
  renderContent() {
    if (!this.props.friend) {
      return '"Are you sure want to delete this Friend ?"'
    }
    return `Are you sure want to delete this Friend with Name: ${this.props.friend.name} ?`
  }
  render() {

    return (
      <Modal
        title="Delete Friend"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { friend: state.friends[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchFriend, deleteFriend })(DeleteFriend);