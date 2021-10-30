import React from 'react';
import {connect} from 'react-redux';
import {setSignIn, setSignOut} from '../actions';

class GoogleAuth extends React.Component {

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId : '788225758057-kt7294lhtn3vh1ea747n938b77o0hr69.apps.googleusercontent.com',
        scope : 'email'
      }).then(()=>{
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChangeSetLocalState(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }
  onAuthChangeSetLocalState = (isSignedIn) => {
    if(isSignedIn){
      this.props.setSignIn(this.auth.currentUser.get().getId());
    }
    else {
      this.props.setSignOut();
    }
  }
  onSignInClick = () => {
    this.auth.signIn();
  }
  onSignOutClick = () => {
    this.auth.signOut();
  }
  renderAuthButton = () => {
    if(this.props.isSignedIn === null){
      return null;
    }
    if(this.props.isSignedIn){
      return (
        <div>
        <button className='ui red google button' onClick={()=>this.onSignOutClick()}>
        <i className='icon google' />  
          Sign Out
        </button>
      </div>
      );
    }
    return (
      <div>
        <button className='ui red google button' onClick={()=>this.onSignInClick()}>
        <i className='icon google' />  
          Sign in with google
        </button>
      </div>
    );
  }

  render(){
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {isSignedIn : state.auth.isSignedIn};
}
export default connect(mapStateToProps, {setSignIn,setSignOut})(GoogleAuth);