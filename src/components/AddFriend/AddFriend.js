import React from 'react';
import FriendForm from '../FriendForm/FriendForm';
import {connect} from 'react-redux';
import {createFriend} from '../../actions';

class AddFriend extends React.Component {
  onSubmit = (formValues) => {
    this.props.createFriend(formValues);
  };
  
  render(){
    return (<div>
      <FriendForm onSubmit={this.onSubmit}/>
    </div>);
  }
}

export default connect(null,{createFriend})(AddFriend);
