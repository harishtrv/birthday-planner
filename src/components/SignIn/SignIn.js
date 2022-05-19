import React from 'react'
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import styles from './signin.module.css';
import { setSignIn } from '../../actions';
import FriendApi from '../../api/Api';

class SignIn extends React.Component {
  state = {wrongPW: false}
  renderInput = ({ input, label, type }) => {
    return (
      <div className={styles.inputField}>
        <input type={type} {...input} required placeholder={label} />
      </div>
    );
  }
  onSubmit = async (formValues) => {
    this.setState({wrongPW: false})
    const res = await FriendApi.get(`/authenticate/${formValues.userName}/${formValues.pw}`);
    if(res.data.message === "success"){
      sessionStorage.setItem('userName', formValues.userName);
      sessionStorage.setItem(formValues.userName, res.data.sessionId);
      this.props.setSignIn(formValues.userName);
    }
    else{
      this.setState({wrongPW: true})
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className={styles.form}>
          <Field name='userName' component={this.renderInput} label="Enter User Name" type='text' />
          <Field name='pw' component={this.renderInput} label="Enter PW" type='password' />
          {this.state.wrongPW ? <p>user name or password is wrong</p> : null}
          <button className={styles.btn}>Submit</button>
        </form>
      </div>
    );
  }
}

const validate = () => { };

export default reduxForm({
    form: 'signIn',
    validate
  })(connect(null, { setSignIn })(SignIn));