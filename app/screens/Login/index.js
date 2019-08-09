import React, { Component } from 'react';

import Login from './layout';

class LoginContainer extends Component {
  onSubmit = () => true;

  render() {
    return <Login />;
  }
}

export default LoginContainer;
