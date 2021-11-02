import React from 'react';
import { Field, reduxForm } from 'redux-form';

class FriendForm extends React.Component{
  renderError({error, touched}){
    if(touched && error){
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }
  renderInput = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched?'error':''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }
  render(){
    return (
    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
      <Field name='title' component={this.renderInput} label="Enter Title"/>
      <Field name='description' component={this.renderInput} label="Enter Description"/>
    <button className='ui button primary'>Submit</button>
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
