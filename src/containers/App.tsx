

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { authActions } from '../redux/modules/auth';
import AppView from './AppView';
import { State } from '../redux/reducer';
import { Dispatch } from 'react';
import { AuthActions } from '../redux/modules/auth/actions';

const mapDispatchToProps = (dispatch: Dispatch<AuthActions>, ownProps: any) => ({
  loginSuccess: (profile: any) => dispatch(authActions.loginSuccess(profile)),
  loginError: (error: any) => dispatch(authActions.loginError(error)),
  logoutSuccess: () => dispatch(authActions.logoutSuccess())
});

const mapStateToProps = (state: State, ownProps: any) => ({
  isAuthenticated: state.auth.isAuthenticated,
  emailAddress: state.auth.profile ? state.auth.profile.sub : null
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppView)
);    
