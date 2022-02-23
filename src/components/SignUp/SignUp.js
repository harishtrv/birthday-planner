import React from 'react'
import { connect } from 'react-redux';
import { createUser, setSignIn } from '../../actions';
import SignUpForm from './SignUpForm';
import FriendApi from '../../api/FriendApi';

class SignUp extends React.Component {

  onSubmit = async (formValues) => {
    await this.props.createUser(formValues);
    const res = await FriendApi.get(`/authenticate/${formValues.userName}/${formValues.pw}`);
    if(res.data.message === "success"){
      this.props.setSignIn(formValues.userName);
    }
  }
  render() {
    return (
      <div>
        <SignUpForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createUser, setSignIn })(SignUp);