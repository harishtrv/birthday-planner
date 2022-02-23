import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import styles from './home.module.css';

class Home extends React.Component {
  state = { buttonStatus: false}
  validateAndRender() {
    if (this.props.isSignedIn) {
      history.push('/cards');
      return <div></div>;
    }
    return <div className={styles.container2}>
      <button className={styles.btn} onClick={()=>this.setState({buttonStatus: !this.state.buttonStatus})}>{this.state.buttonStatus ? 'Click here for SignIn' : 'Click here for SignUp'}</button>
      {this.state.buttonStatus ? <SignUp /> : <SignIn />}
    </div>;
  }
  render() {
    return (
      <div className={styles.container}>
        <h1>Welcome to Birthday Planner</h1>
        {this.validateAndRender()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn || state.user.isSignedIn};
}
export default connect(mapStateToProps, null)(Home);
