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
