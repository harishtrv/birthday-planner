import React from 'react';
import GoogleAuth from '../GoogleAuth/GoogleAuth';
import { connect } from 'react-redux';
import history from '../../history';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';

class Home extends React.Component {

  bypass() {
    history.push('/cards');
  }
  validateAndRender() {
    if (this.props.isSignedIn) {
      history.push('/cards');
      return <div></div>;
    }
    return <div>
      <GoogleAuth />
      <h1 onClick={this.bypass}>Click here to by Pass SignIn</h1>
      <SignUp />
      <SignIn />
    </div>;
  }
  render() {
    return (
      <div className='container1'>
        <h1>Welcome to Birthday Planner</h1>
        {this.validateAndRender()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn || state.user.isSignedIn};
}
export default connect(mapStateToProps, null)(Home);
