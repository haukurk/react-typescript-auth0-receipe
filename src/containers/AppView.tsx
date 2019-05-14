import React, { Component } from "react";
import logo from "../assets/logo.svg";
import "./App.scss";
import * as AuthService from "../utils/AuthService";

class AppView extends Component<any, any> {
  componentWillMount() {
    const { history, loginError, loginSuccess } = this.props;
    // Add callback for lock's `authenticated` event
    AuthService.lock.on("authenticated", (authResult: any) => {
      AuthService.lock.getUserInfo(
        authResult.accessToken,
        (error: any, profile: any) => {
          if (error) {
            return loginError(error);
          }
          AuthService.setAccessToken(authResult.accessToken);
          AuthService.setProfile(profile); // static method
          loginSuccess(profile);
          history.push({ pathname: "/" });
          AuthService.lock.hide();
        }
      );
    });
    // Add callback for lock's `authorization_error` event
    AuthService.lock.on("authorization_error", (error: any) => {
      loginError(error);
      history.push({ pathname: "/" });
    });
  }

  render() {
    const { isAuthenticated, logoutSuccess } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {isAuthenticated ? (
            <>
              <p>You are logged in..</p>
              <button onClick={AuthService.logout && logoutSuccess}>Logout</button>
            </>
          ) : (
            <>
              <p>You are NOT logged in..</p>
              <button onClick={AuthService.login}>Login</button>
            </>
          )}
        </header>
      </div>
    );
  }
}

export default AppView;
