import {
  LOGIN_REQUEST,
  LOGIN_ACCEPTED,
  LOGIN_REJECTED,
  CHECK_AUTH,
  CHECK_AUTH_OK,
  CHECK_AUTH_KO,
  LOGOUT
} from '../constants/user';

const initialState = {
  userInfo: null,
  userId: null,
  token: null,
  isAuthenticating: false,
  isAuthenticated: false,
  error: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    // LOGIN
    case LOGIN_REQUEST: {
      return {
        ...state,
        isAuthenticating: true
      };
    }
    case LOGIN_ACCEPTED: {
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        userId: action.payload.accountId,
        token: action.payload.accessToken,
        error: null
      };
    }
    case LOGIN_REJECTED: {
      return {
        ...state,
        isAuthenticating: false,
        error: action.payload
      };
    }
    // AUTH
    case CHECK_AUTH: {
      return {
        ...state,
        isAuthenticating: true
      };
    }
    case CHECK_AUTH_OK: {
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        userId: action.payload.accountId,
        token: action.payload.accessToken,
        error: null
      };
    }
    case CHECK_AUTH_KO: {
      return {
        ...state,
        isAuthenticating: false
      };
    }
    // LOGOUT
    case LOGOUT: {
      return {
        ...state,
        userInfo: null,
        token: null,
        isAuthenticated: false
      };
    }
    default:
      return {...state};
  }
};

export default user;
