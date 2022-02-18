import React from 'react';
import { connect } from 'react-redux';
import { createFriend } from '../../actions';
import Card from '../Card/friendCard';
import FriendApi from '../../api/FriendApi';

class AddFriend extends React.Component {
  state = { 'suggestedFriends' : []};
  onSubmit = (formValues) => {
    this.props.createFriend(formValues);
  };
  componentDidMount = async () => {
     const res = await FriendApi.get(`/getfriendsuggestion/${this.props.userName}`);

    this.setState({'suggestedFriends' : res.data.suggestedfriends.map(item => <Card key={item.userName} friend={item} />)});
  };

  render() {
    return (<div style={{display:'grid', gridTemplateColumns: 'auto auto auto auto'}}>
      {this.state.suggestedFriends}
    </div>);
  }
}
const mapStateToProps = (state) => {
  return {userName: state.user.userName};
}

export default connect(mapStateToProps, { createFriend })(AddFriend);
