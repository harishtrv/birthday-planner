import React from 'react'
import {connect} from 'react-redux';
import { createUser } from '../../actions';
import SignUpForm from './SignUpForm';

class SignUp extends React.Component {

  onSubmit = (formValues) => {
    // this.props.createUser(formValues);
  }
  render() {
    return (
      <div>
       <SignUpForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default connect(null, { createUser })(SignUp);