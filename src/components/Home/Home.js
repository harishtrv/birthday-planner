import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import styles from './home.module.css';
import Carousel from '../Carousel/Carousel';

class Home extends React.Component {
  state = { buttonStatus: false }
  validateAndRender() {
    if (this.props.isSignedIn) {
      history.push('/cards');
      return <div></div>;
    }
    return <div className={styles.container2}>
      <div className={styles.selection}>
        <button className={styles.btn}
          onClick={() => this.setState({ buttonStatus: true })}>
          SignUp
        </button>
        <button className={styles.btn}
          onClick={() => this.setState({ buttonStatus: false })}>
          SignIn
        </button>
      </div>
      <hr className={this.state.buttonStatus ? styles.signUphr : styles.signInhr} />
      {this.state.buttonStatus ? <SignUp /> : <SignIn />}
    </div>;
  }
  render() {
    return (
      <div>
        <h1>Welcome to Birthday Planner</h1>
        <Carousel />
        <div className={styles.container}>
          {this.validateAndRender()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn || state.user.isSignedIn };
}
export default connect(mapStateToProps, null)(Home);
