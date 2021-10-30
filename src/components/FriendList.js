import React from 'react';

class FriendList extends React.Component {

  renderAllFriends = () => {
    const response = [
      {"name":"abc", "contact":123, "birthday":"8th Jan", "isgrpExists":true},
      {"name":"efg", "contact":456, "birthday":"26 Jun", "isgrpExists":false},
      {"name":"efg", "contact":456, "birthday":"26 Jun", "isgrpExists":false}
    ];
    return response.map(friend=>this.renderCards(friend));
  }
  renderCards = (friend) => {
    return (
      <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">
            {friend.name}
          </div>
          <div className="description">
            Contact : {friend.contact}
          </div>
          <div className="description">
            Birthday : {friend.birthday}
          </div>
          <button className='ui button secondary'>{friend.isgrpExists ? "Open Group":"Create Group"}</button>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Edit</div>
            <div className="ui basic red button">Delete</div>
          </div>
        </div>
      </div>
    </div>
    );
  }
  render(){
  return (
    <div className='ui container'>
    <div className='ui three column grid'>
      {this.renderAllFriends()}
    </div>
    </div>
  );
  }
}

export default FriendList;
