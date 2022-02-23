import React from 'react'
import { Field, reduxForm } from 'redux-form';
import styles from './signup.module.css';

class SignUpForm extends React.Component {
  renderInput = ({ input, label, type }) => {
    return (
      <div className={styles.inputField}>
        <input type={type} {...input} placeholder={label} required />
      </div>
    );
  }
  _onFocus = (e) => {
    e.currentTarget.type = "date";
  }
  _onBlur = (e) => {
    e.currentTarget.type = "text";
    e.currentTarget.placeholder = "Enter Date of Birth";
  }
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className={styles.form}>
          <Field name='userName' component={this.renderInput} label="Enter User Name" />
          <Field name='pw' component={this.renderInput} label="Enter PW" type='password'/>
          <Field name='DOB' onFocus={this._onFocus} onBlur={this._onBlur} component={this.renderInput} label="Enter Date of Birth" />
          <Field name='contactNo' component={this.renderInput} label="Enter Contact detail" />
          <button className={styles.btn}>Submit</button>
        </form>
      </div>
    );
  }
}

const validate = () => { };

export default reduxForm({
  form: 'signUp',
  validate
})(SignUpForm);