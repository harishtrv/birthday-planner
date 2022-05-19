import React from 'react';
import { connect } from 'react-redux';
import Api from '../../api/Api';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chats: [], msg: "" };
  }
  fName = this.props.match.params.fName;
  async componentDidMount() {
    this.timer = setInterval(async () => {
      const res = await Api.get(`/getPersonelChats/${this.props.userName}/${this.fName}`);
      const sortedRes = res.data.chats.sort((c1, c2) => c1.id - c2.id);
      this.setState({ chats: sortedRes })
    }, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  getChats = () => {
    return this.state.chats.map(chat => {
      return (
        <div style={{ margin: '5px', pading: '5px' }}>
          <p style={chat.sender === this.props.userName ?
            { float: 'right', backgroundColor: '#fffea7', borderRadius: '15px' } :
            { float: 'left', backgroundColor: '#ddd', borderRadius: '15px' }}>
            <h4 style={{ margin: '3px', padding: '3px 15px', color: "black", lineBreak: 'anywhere' }}>
              {chat.msg}
              <br />
              <p style={{ fontSize: 'x-small', float: 'right', color: 'brown' }}>
                {chat.dateTime.slice(11, 16)}
              </p>
            </h4>
          </p>
        </div>
      );
    })
  }
  send = async (e) => {
    e.preventDefault();
    let res = await Api.post('/sendPersonalChat',
      {
        "sender": this.props.userName,
        "receiver": this.fName,
        "msg": this.state.msg
      });
    if (res.data.message === 'sent') {
      let res2 = await Api.get(`/getPersonelChats/${this.props.userName}/${this.fName}`);
      const sortedRes = res2.data.chats.sort((c1, c2) => c1.id - c2.id);
      this.setState({ chats: sortedRes });
      this.setState({ msg: "" });
    }
  }
  render() {

    return (
      <React.Fragment>
        <div
          style={{
            display: 'flex', flexDirection: "column", margin: "0px 300px",
            backgroundColor: 'aliceblue', position: 'relative', width: '600px',
            height: '470px', overflow: 'auto'
          }}>
          {this.getChats()}
        </div>
        <form onSubmit={e => this.send(e)}>
          <input type='text' placeholder='Enter Message...' value={this.state.msg}
            onChange={e => this.setState({ msg: e.target.value })}
            style={{
              width: '590px', backgroundColor: '#e8ffde', padding: '15px',
              borderRadius: '30px', position: 'fixed', bottom: '10px', margin: "0px 300px"
            }} />
        </form>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return { userName: state.user.userName, isSignedIn: state.user.isSignedIn };
}
export default connect(mapStateToProps, null)(Chat);