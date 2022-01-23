import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './friendform.module.css';

class FriendForm extends React.Component{
  renderInput = ({input, label, type}) => {
    return (
      <div>
        <label>{label}</label>
        <input type={type} {...input}/>
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }
  render(){
    return (
    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className={styles.form}>
     <Field name='name' component={this.renderInput} label="Enter Name"/>
      <Field name='birthday' component={e=>this.renderInput({...e, type:'date'})} label="Enter Date of Birth"/>
      <Field name='contact' component={this.renderInput} label="Enter Contact detail"/>
    <button className={styles.btn}>Submit</button>
    </form>
    );
  }
}

const validate = (formValues) => {
  const error={};
  if(!formValues.title){
    error.title = 'you must Enter Title';
  }
  if(!formValues.description){
    error.description = 'you must Enter Description';
  }
  return error;
}

export default reduxForm({
  form: 'friendForm',
  validate
})(FriendForm);
