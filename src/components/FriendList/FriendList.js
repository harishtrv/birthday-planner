import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/friendCard';
import SearchBar from '../SearchBar/SearchBar';
import DropDown from '../DropDown/DropDown';
import history from '../../history';
import { fetchFriends } from '../../actions';
import styles from './friendlist.module.css';

class FriendList extends React.Component {
  async componentDidMount() {
    await this.props.fetchFriends();
    this.setState({ 'response': this.props.friends });
  }
  state = { 'response': this.props.friends };
  renderAllFriends = () => {
    if (this.state.response.length > 0) {
      return this.state.response.map(friend => <Card key={friend.id} friend={friend} />);
    }
    else {
      return <p>No results found. change filter setting or add a new friends</p>
    }
  }

  changeList = (list) => {
    if (list.length) {
      this.setState({ 'response': list });
    }
    else {
      this.setState({ 'response': [] });
    }
  }

  addFriend = () => {
    history.push('/add');
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.grid}>
          <SearchBar changeList={this.changeList} list={this.props.friends} />
          <DropDown changeList={this.changeList} list={this.props.friends} />
          <button className={styles.add} onClick={this.addFriend}>Add New Friend</button>
        </div>
        <br />
        <br />
        <div className={styles.cardgrid}>
          {this.renderAllFriends()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, friends: Object.values(state.friends) };
}
export default connect(mapStateToProps, { fetchFriends })(FriendList);
