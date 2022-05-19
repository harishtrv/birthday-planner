import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/friendCard';
import SearchBar from '../SearchBar/SearchBar';
import DropDown from '../DropDown/DropDown';
import history from '../../history';
import { fetchFriends } from '../../actions';
import styles from './friendlist.module.css';

class FriendList extends React.Component {
  state = {ctrl: false};
  async componentDidMount() {
    if (this.props.isSignedIn) {
      await this.props.fetchFriends(this.props.userName);
      this.setState({ 'response': this.props.friends });
    }
    else {
      history.push('/');
    }
    window.addEventListener('keydown', this.keyDownListenerForCtrlAndI, true);
    window.addEventListener('keyup', this.keyUpListenerForCtrlAndI, true);
  }
  keyDownListenerForCtrlAndI = (e) => {
    if (e.keyCode === 17) {
      this.setState({ctrl: true});
    }else if(this.state.ctrl && e.key === 'i'){
      e.preventDefault();
    }
  }
  keyUpListenerForCtrlAndI = (e) => {
    if(this.state.ctrl){
      if(e.keyCode === 17){
        this.setState({ctrl: false});
      }else if(e.key === 'i'){
        history.push('/about');
      }
      
    }
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDownListener, true);
    window.removeEventListener('keyup', this.keyUpListener, true);
  }
  state = { 'response': this.props.friends };
  renderAllFriends = () => {
    if (this.state.response.length > 0) {
      return this.state.response.map(friend => <Card key={friend.userName} isFriend={true} friend={friend} />);
    }
    else {
      return <p>No results found. change filter setting or add a new friends</p>;
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
    history.push('/ShowFriendSuggestion');
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.options}>
          <SearchBar changeList={this.changeList} list={this.props.friends} />
          <div className={styles.grid}>
            <DropDown changeList={this.changeList} list={this.props.friends} />
            <button className={styles.add} onClick={this.addFriend}>Add New Friend</button>
          </div>
        </div>
        <br />
        <div className={styles.cardgrid}>
          {this.renderAllFriends()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.user.isSignedIn, friends: Object.values(state.friends), userName: state.user.userName };
}
export default connect(mapStateToProps, { fetchFriends })(FriendList);
