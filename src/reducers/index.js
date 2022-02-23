import { combineReducers } from 'redux';
import _ from 'lodash';
import { reducer as formReducer } from 'redux-form';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};
const INITIAL_USER_STATE = {
  isSignedIn: false,
  userName: null
}

const googleAuthReducer = (state = INITIAL_STATE, action = null) => {
  switch (action.type) {
    case 'GOOGLE_SIGN_IN':
      return { ...state, isSignedIn: true, userId: action.payload };
    case 'GOOGLE_SIGN_OUT':
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};

const userAuthReducer = (state = INITIAL_USER_STATE, action = null) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { ...state, isSignedIn: true, userName: action.payload };
    case 'SIGN_OUT':
      return { ...state, isSignedIn: false, userName: null };
    default:
      return state;
  }
};


const friendReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case 'FETCH_FRIEND':
      return { ...state, [action.payload.userName]: action.payload };
    case 'CREATE_FRIEND':
      return { ...state, [action.payload.userName]: action.payload };
    case 'EDIT_FRIEND':
      return { ...state, [action.payload.userName]: action.payload };
    case 'FETCH_FRIENDS':
      return { ...state, ..._.mapKeys(action.payload, 'userName') };
    case 'DELETE_FRIEND':
      return _.omit(state, action.payload);
    case 'SIGN_OUT':
      return {};
    default:
      return state;
  }
}

export default combineReducers({
  auth: googleAuthReducer,
  friends: friendReducer,
  user: userAuthReducer,
  form: formReducer
});
