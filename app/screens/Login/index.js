import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import actionCreators from '@redux/Login/actions';

import { emailRegex, PASS_MIN_LENGHT } from './constants';
import Login from './layout';

class LoginContainer extends Component {
  state = {
    user: '',
    pass: '',
    error: ''
  };

  onSubmit = () => {
    const {
      navigation: { navigate },
      login
    } = this.props;
    const { user, pass } = this.state;

    if (user === '' || pass === '') {
      this.setState({ error: 'Debe completar usuario y contraseña' });
      return;
    }

    if (user !== '' && !emailRegex.test(user)) {
      this.setState({ error: 'Formato de cuenta incorrecto' });
      return;
    }

    if (pass !== '' && pass.length < PASS_MIN_LENGHT) {
      this.setState({ error: 'La contraseña debe contener al menos 8 caracteres' });
      return;
    }

    this.setState({ error: '' });

    if (login(user, pass)) {
      navigate('tab');
    }
  };

  handleOnTextChange = (text, name) => {
    this.setState({ [name]: text });
  };

  render() {
    const { error } = this.state;
    const { loginError, loggedIn, isLoading } = this.props;

    if (loggedIn) {
      this.props.navigation.navigate('tab');
    }

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
  loggedIn: PropTypes.bool,
  loginError: PropTypes.string,
  navigation: PropTypes.shape({ navigate: PropTypes.func })
};

const mapDispatchToProps = dispatch => ({
  login: (user, pass) => dispatch(actionCreators.login(user, pass))
});

const mapStateToProps = state => ({
  loginError: state.login.loginError,
  loggedIn: state.login.loggedIn,
  isLoading: state.login.isLoading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
