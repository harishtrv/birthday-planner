import FriendApi from '../api/FriendApi';
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

export const createFriend = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  // const response = await FriendApi.post('/friend', {...formValues, userId});
  const response = await fetch('http://localhost:3001/friend',
    {
      method: 'post', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formValues, userId })
    });
  const data = await response.json();

  dispatch({ type: 'CREATE_FRIEND', payload: data });
  history.push('/');
};

export const createUser = (formValues) => async dispatch => {
  const response = await fetch('http://localhost:3001/users',
    {
      method: 'post', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formValues })
    });
  const data = await response.json();

  dispatch({ type: 'CREATE_USER', payload: data });
  history.push('/cards');
};

export const editFriend = (id, formValues) => async dispatch => {
  const response = await FriendApi.patch(`/friend/${id}`, formValues);

  dispatch({ type: 'EDIT_FRIEND', payload: response.data });
  history.push('/');
}

export const deleteFriend = (id) => async dispatch => {
  await FriendApi.delete(`/friend/${id}`);

  dispatch({ type: 'DELETE_FRIEND', payload: id });
  history.push('/');
}

export const fetchFriend = (id) => async dispatch => {
  const response = await FriendApi.get(`/friend/${id}`);

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
