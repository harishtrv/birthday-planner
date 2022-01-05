import FriendApi from '../api/FriendApi';
import history from '../history';

export const setSignIn = (userId) => {
  return { 
    type : 'SIGN_IN',
    payload : userId
    };
}

export const setSignOut = () => {
  return {
    type : 'SIGN_OUT'
  };
}

export const createFriend = (formValues) => async (dispatch, getState) =>{
  const {userId} = getState().auth;
  const response = await FriendApi.post('/friend', {...formValues, userId});

  dispatch({type: 'CREATE_FRIEND', payload: response.data});
  history.push('/');
};

export const fetchFriends = () => async dispatch => {
  const response = await FriendApi.get('/friend');
  /*console.log(response.data);
  var HTTPReq = new XMLHttpRequest();
  HTTPReq.open('GET','http://localhost:3001/friend');
  await HTTPReq.send();
  HTTPReq.onreadystatechange = function(res){
    console.log(res.target.response);
    dispatch({ type: 'FETCH_FRIENDS', payload: res.target.response });
  }*/
  dispatch({ type: 'FETCH_FRIENDS', payload: response.data });
}

export const editFriend = (id, formValues) => async dispatch => {
  const response = await FriendApi.patch(`/friend/${id}`,formValues);

  dispatch({type: 'EDIT_FRIEND', payload: response.data});
  history.push('/');
}

export const deleteFriend = (id) => async dispatch => {
  await FriendApi.delete(`/friend/${id}`);

  dispatch({type: 'DELETE_FRIEND', payload: id})
  history.push('/');
}

export const fetchFriend = (id)=> async dispatch => {
  const response = await FriendApi.get(`/friend/${id}`);

  dispatch({type: 'FETCH_FRIEND', payload: response.data});
}
