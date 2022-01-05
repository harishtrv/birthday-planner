import { combineReducers} from 'redux';
import _ from 'lodash';
import {reducer as formReducer} from 'redux-form';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

const authReducer = (state=INITIAL_STATE, action=null) => {
  switch(action.type) {
    case 'SIGN_IN':
      return { ...state, isSignedIn: true, userId: action.payload };
    case 'SIGN_OUT':
      return { ...state, isSignedIn: false, userId: null};
    default :
      return state;
  }
};

const friendReducer = (state = {}, action = {}) => {
  switch(action.type){
    case 'FETCH_FRIEND':
      return {...state, [action.payload.id]: action.payload};
    case 'CREATE_FRIEND':
      return {...state, [action.payload.id]: action.payload};
    case 'EDIT_FRIEND':
      return {...state, [action.payload.id]: action.payload};
    case 'FETCH_FRIENDS':
      return {...state, ..._.mapKeys(action.payload,'id')};
    case 'DELETE_FRIEND':
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
export default combineReducers({
  auth : authReducer,
  friends : friendReducer,
  form : formReducer
});
