import React from 'react';
import { createGroup } from '../../actions';
import { connect } from 'react-redux';
import styles from './groupChat.module.css';

class GroupChat extends React.Component {

  chat = ({ name, text, time }) => {
    return (
      <div className={styles.chat}>
        <h3>{name}</h3>
        <p>{text}</p>
        <span className={styles.timeright}>{time}</span>
      </div>
    );
  }
  render() {
    this.props.createGroup(this.props.match.params.id);
    return (
      <div>
        {this.chat({'name':'Harish','text':'Hi','time':'10:42'})}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { friends: state.friends[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { createGroup })(GroupChat);
