import React from 'react'
import { Field, reduxForm } from 'redux-form';
import styles from './signup.module.css';

class SignUpForm extends React.Component {
  renderInput = ({ input, label, type }) => {
    return (
      <div>
        <label>{label}</label>
        <input type={type} {...input} required />
      </div>
    );
  }
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className={styles.form}>
          <Field name='userName' component={this.renderInput} label="Enter User Name" />
          <Field name='pw' component={this.renderInput} label="Enter PW" />
          <Field name='DOB' component={e => this.renderInput({ ...e, type: 'date' })} label="Enter Date of Birth" />
          <Field name='contactNO' component={this.renderInput} label="Enter Contact detail" />
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