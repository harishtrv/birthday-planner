import FriendApi from '../api/Api';
import history from '../history';

export const setSignIn = (userName) => {
  return {
    type: 'SIGN_IN',
    payload: userName
  };
}

export const setSignOut = () => {
  return {
    type: 'SIGN_OUT'
  };
}

export const setGoogleSignIn = (userId) => {
  return {
    type: 'GOOGLE_SIGN_IN',
    payload: userId
  };
}

export const setGoogleSignOut = () => {
  return {
    type: 'GOOGLE_SIGN_OUT'
  };
}

export const fetchFriends = (userName) => async dispatch => {
  const friends = await FriendApi.get(`/getfriends/${userName}`);
  dispatch({ type: 'FETCH_FRIENDS', payload: friends.data.friends });
}

export const createUser = (formValues) => async dispatch => {
  await FriendApi.post('/adduser',{...formValues});
};

export const editFriend = (id, formValues) => async dispatch => {
  const response = await FriendApi.patch(`/friend/${id}`, formValues);

  dispatch({ type: 'EDIT_FRIEND', payload: response.data });
  history.push('/');
}

export const deleteFriend = (userName, friendName) => async dispatch => {
  const response = await FriendApi.delete(`/removefriend/${userName}/${friendName}`);

  dispatch({ type: 'DELETE_FRIEND', payload: response.data.friendName });
  history.push('/');
}

export const fetchFriend = (userName) => async dispatch => {
  const response = await FriendApi.get(`/getusers/${userName}`);

  dispatch({ type: 'FETCH_FRIEND', payload: response.data });
}

export const createGroup = (id) => async dispatch => {
  const frnd = await FriendApi.get(`/friend/${id}`);
  if (frnd.data.isgrpExists) {
    return;
  }
  await FriendApi.patch(`/friend/${id}`, {
    'name': frnd.name, "birthday": frnd.birthday, "contact": frnd.contact,
    "userId": frnd.userId, "id": frnd.userId, 'isgrpExists': true
  });
}

export const addFriend = (userName, friendName) => async dispatch => {
  const res = await FriendApi.post('/addfriend', { userName, friendName });
  const response = await FriendApi.get(`/getusers/${res.data.friendName}`);
  dispatch({ type: 'FETCH_FRIEND', payload: response.data });
  history.push('/');
}