import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    }
  }

  handleChangeInput = (name, value) => {
    this.setState({ [name]: value })
  }

  handleSubmit = () => {

  }

  _renderFormLogin = () => {
    const { username, password } = this.state
    return (
      <div className="form-login">
        <div className='form__input'>
          <label>User name</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(event) => this.handleChangeInput('username', event.target.value)}
          />
        </div>
        <div className='form__input'>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => this.handleChangeInput('password', event.target.value)}
          />
        </div>
        <button className="button-login" onClick={() => this.handleSubmit()}>Log in</button>
      </div>
    )
  }

  render() {
    return (
      <div className="wrapper-login">
        <div className="container-login">
          <div className="heading-login">Login</div>
          {this._renderFormLogin()}
          <p className="title-login">Or sig in with:</p>
          <div className="other-login">
            <i className="fab fa-facebook-f social-facebook"></i>
            <i className="fab fa-twitter social-twitter"></i>
            <i className="fab fa-google-plus-g social-google"></i>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    lang: state.app.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
