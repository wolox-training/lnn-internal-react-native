import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import actionCreators from '@redux/Login/actions';

import Login from './layout';
import { validateLogin } from './utils';

class LoginContainer extends Component {
  state = {
    user: '',
    pass: '',
    error: null
  };

  onSubmit = () => {
    const { login } = this.props;
    const { user, pass } = this.state;

    const err = validateLogin(user, pass);

    if (err) {
      this.setState({ error: err });
    } else {
      login(user, pass);
    }
  };

  handleOnTextChange = (text, name) => {
    this.setState({ [name]: text });
  };

  render() {
    const { error } = this.state;
    const { isLoading, loginError } = this.props;

    return (
      <Login
        handleOnSubmit={this.onSubmit}
        onTextChange={this.handleOnTextChange}
        error={error || loginError}
        isLoading={isLoading}
      />
    );
  }
}

LoginContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  loginError: PropTypes.string,
  navigation: PropTypes.shape({ navigate: PropTypes.func })
};

const mapDispatchToProps = dispatch => ({
  login: (user, pass) => dispatch(actionCreators.login(user, pass))
});

const mapStateToProps = state => ({
  loginError: state.login.loginError,
  isLoading: state.login.isLoading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
