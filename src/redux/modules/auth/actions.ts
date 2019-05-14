import * as types from "./types";
import { Profile } from "./types";

type LoginRequest = { type: typeof types.LOGIN_REQUEST };
type LoginSuccess = {
  type: typeof types.LOGIN_SUCCESS;
  payload: { profile: Profile };
};
type LoginError = { type: typeof types.LOGIN_ERROR; error: any };
type LogoutSuccess = { type: typeof types.LOGOUT_SUCCESS };

export const loginRequest = () : LoginRequest => ({
  type: types.LOGIN_REQUEST
});

export const loginSuccess = (profile: Profile): LoginSuccess => ({
  type: types.LOGIN_SUCCESS,
  payload: { profile }
});

export const loginError = (error: any) : LoginError => ({
  type: types.LOGIN_ERROR,
  error
});

export const logoutSuccess = () : LogoutSuccess => ({
  type: types.LOGOUT_SUCCESS
});

export type AuthActions =
  | LoginRequest
  | LoginSuccess
  | LoginError
  | LogoutSuccess;
