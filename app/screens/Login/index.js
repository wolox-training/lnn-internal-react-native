import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

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
      navigation: { navigate }
    } = this.props;
    const { user, pass } = this.state;

    if (user === '' || pass === '') {
      this.setState({ error: 'Falta completar usario y/o contraseña' });
      return;
    }

    if (user !== '' && !emailRegex.test(user)) {
      this.setState({ error: 'Email inválido' });
      return;
    }

    if (pass !== '' && pass.length < PASS_MIN_LENGHT) {
      this.setState({ error: 'La contraseña debe contener al menos 8 caracteres' });
      return;
    }

    navigate('tab');
  };

  handleOnTextChange = (text, name) => {
    this.setState({ [name]: text });
  };

  render() {
    const { error } = this.state;
    return <Login handleOnSubmit={this.onSubmit} onTextChange={this.handleOnTextChange} error={error} />;
  }
}

LoginContainer.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func })
};

export default LoginContainer;
