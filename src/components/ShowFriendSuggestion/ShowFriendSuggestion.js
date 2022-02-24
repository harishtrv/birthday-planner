import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/friendCard';
import FriendApi from '../../api/FriendApi';
import history from '../../history';
import styles from './friendsuggestion.module.css';

class ShowFriendSuggestion extends React.Component {
  state = { 'suggestedFriends' : []};
  componentDidMount = async () => {
    if(this.props.isSignedIn){
      const res = await FriendApi.get(`/getfriendsuggestion/${this.props.userName}`);
      this.setState({'suggestedFriends' : res.data.suggestedfriends.map(item => <Card key={item.userName} friend={item} />)});
    }
    else{
      history.push('/');
    }
  };

  render() {
    return (<div className={styles.cardlist}>
      {this.state.suggestedFriends}
    </div>);
  }
}
const mapStateToProps = (state) => {
  return {userName: state.user.userName, isSignedIn: state.user.isSignedIn};
}

export default connect(mapStateToProps, null)(ShowFriendSuggestion);
