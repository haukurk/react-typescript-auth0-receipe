import * as types from './types';
import * as AuthService from '../../../utils/AuthService';
import { Profile } from './types';
import { AuthActions } from './actions';
import { Maybe } from '../../types';

export type AuthState = {
    isAuthenticated: Boolean;
    isFetching: Boolean;
    profile: Maybe<Profile>;
    error: any
}

const authReducer = (
  state: AuthState = {
    isAuthenticated: !AuthService.isTokenExpired(),
    isFetching: false,
    profile: AuthService.getProfile(),
    error: null
  },
  action: AuthActions
) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        profile: action.payload.profile
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        profile: null,
        error: action.error
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        profile: null
      };
    default:
      return state;
  }
};

export default authReducer;
