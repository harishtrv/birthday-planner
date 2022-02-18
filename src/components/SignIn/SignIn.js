import React from 'react'
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import styles from './signin.module.css';
import { setSignIn } from '../../actions';
import FriendApi from '../../api/FriendApi';

class SignIn extends React.Component {
  renderInput = ({ input, label, type }) => {
    return (
      <div>
        <label>{label}</label>
        <input type={type} {...input} required />
      </div>
    );
  }
  onSubmit = async (formValues) => {
    console.log(formValues);
    const res = await FriendApi.get(`/authenticate/${formValues.userName}/${formValues.pw}`);
    if(res.data.message === "success"){
      this.props.setSignIn(formValues.userName);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className={styles.form}>
          <Field name='userName' component={this.renderInput} label="Enter User Name" />
          <Field name='pw' component={this.renderInput} label="Enter PW" />
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