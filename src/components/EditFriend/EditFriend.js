import React from 'react';
import FriendForm from '../FriendForm/FriendForm';
import _ from 'lodash';
import {fetchFriend, editFriend} from '../../actions';
import {connect} from 'react-redux';

class EditFriend extends React.Component {
  componentDidMount(){
    this.props.fetchFriend(this.props.match.params.id);
  }
  onSubmit = (formValues)=>{
    this.props.editFriend(this.props.match.params.id, formValues);
  }
  render(){
    if(!this.props.friends){
      return <div>...loading</div>
    }
    return (<div>
      <FriendForm initialValues={_.pick(this.props.friends,'name','birthday','contact')} onSubmit={this.onSubmit}/>
    </div>);
  }
}

const mapStateToProps = (state,ownProps)=>{
  return {friends: state.friends[ownProps.match.params.id]};
}
export default connect(mapStateToProps,{fetchFriend, editFriend})(EditFriend);
