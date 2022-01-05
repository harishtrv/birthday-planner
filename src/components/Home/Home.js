import React from 'react';
import GoogleAuth from '../GoogleAuth/GoogleAuth';
import {connect} from 'react-redux';
import history from '../../history';

class Home extends React.Component {

  validateAndRender(){
    if(this.props.isSignedIn){
      history.push('/cards');
      return <div></div>;
    }
    return <div>
      <GoogleAuth />
    </div>;
  }
  render(){
  return (
    <div className='container1'>
      <h1>Welcome to Birthday Planner</h1>
      {this.validateAndRender()}
    </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {isSignedIn : state.auth.isSignedIn};
}
export default connect(mapStateToProps, null)(Home);
