import React from 'react';
import {connect} from 'react-redux';
import Card from './friendCard';
import SearchBar from './SearchBar';
import DropDown from './DropsDown';
import history from '../history';

class FriendList extends React.Component {
  constructor(props){
    super(props);
    this.state = {'response' : [
      {"name":"abc", "contact":123, "birthday":"8th Jan", "isgrpExists":true},
      {"name":"efg", "contact":456, "birthday":"26 Jun", "isgrpExists":false},
      {"name":"xyz", "contact":456, "birthday":"26 Jun", "isgrpExists":false},
      {"name":"mno", "contact":456, "birthday":"26 Jun", "isgrpExists":false},
      {"name":"efg", "contact":456, "birthday":"26 Jun", "isgrpExists":false},
      {"name":"pqr", "contact":456, "birthday":"26 Jun", "isgrpExists":false}
    ]
  };
  }

  fullList = [
    {"name":"abc", "contact":123, "birthday":"8th Jan", "isgrpExists":true},
    {"name":"efg", "contact":456, "birthday":"26th Jun", "isgrpExists":false},
    {"name":"xyz", "contact":456, "birthday":"8th Jun", "isgrpExists":true},
    {"name":"mno", "contact":456, "birthday":"26th Jan", "isgrpExists":false},
    {"name":"efg", "contact":989, "birthday":"8th Jun", "isgrpExists":false},
    {"name":"pqr", "contact":456, "birthday":"26th Jun", "isgrpExists":false}
  ];

  renderAllFriends = () => {
    return this.state.response.map(friend=><Card friend={friend} />);
  }

  changeList = (list) => {
    if(list.length){
      this.setState({'response' : list});
    }
    else{
      this.setState({'response': this.fullList});
    }
    console.log(this.state.response);
  }

  openForm = () => {
    history.push('/form');
  }
  render(){
  return (
    <div className='ui container'>
      <div className='ui three column grid'>
      <SearchBar changeList={this.changeList} list={this.fullList} />
      <DropDown changeList={this.changeList} list={this.state.response} />
      <button className='ui button primary' onClick={this.openForm}>Add New Friend</button>
      </div>
      <br />
      <br />
    <div className='ui three column grid'>
      {this.renderAllFriends()}
    </div>
    </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {isSignedIn: state.auth.isSignedIn};
}
export default connect(mapStateToProps, null)(FriendList);
