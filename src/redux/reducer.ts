import { combineReducers } from 'redux';

import authReducer from './modules/auth';
import { AuthState } from './modules/auth/reducer';

export type State = {
    auth: AuthState;
}

export default combineReducers<State>({
  auth: authReducer,
})
