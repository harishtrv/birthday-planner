import React from 'react';

class Card extends React.Component {
  render(){
    return (
      <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">
            {this.props.friend.name}
          </div>
          <div className="description">
            Contact : {this.props.friend.contact}
          </div>
          <div className="description">
            Birthday : {this.props.friend.birthday}
          </div>
          <button className='ui button primary'>{this.props.friend.isgrpExists ? "Open Group":"Create Group"}</button>
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
}

export default Card;
