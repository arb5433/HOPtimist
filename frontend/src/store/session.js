import { csrfFetch } from './csrf';

// constants
const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';
const SET_INFO = 'session/setInfo';
const initialState = { user: null, userInfo: null };

// action creators
const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

const setInfo = (user) => {
  return{
    type: SET_INFO,
    user
  }
}

// thunk creators
export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};

export const userInfo = (id) => async (dispatch) => {
  console.log('********SENDING REQUEST TO *************', `/api/users/${id}`)
  const response = await fetch(`/api/users/${id}`);
  if(response.ok){
    const user = await response.json();
    dispatch(setInfo(user));
    return user;
  }
}


// session reducer
const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      newState.userInfo = null;
      return newState;
    case SET_INFO:
      newState = {...state};
      newState.userInfo = action.user;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;