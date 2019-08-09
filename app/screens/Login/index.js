import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Login from './layout';

class LoginContainer extends Component {
  onSubmit = () => {
    const {
      navigation: { navigate }
    } = this.props;
    navigate('tab');
  };

  render() {
    return <Login handleOnSubmit={this.onSubmit} />;
  }
}

LoginContainer.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func })
};

export default LoginContainer;
