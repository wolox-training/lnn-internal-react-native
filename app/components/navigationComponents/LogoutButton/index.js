import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { ROUTES as Routes } from '@config/screens';
import actionCreators from '@redux/Login/actions';

import img from './assets/user.png';
import { styles } from './styles';

class LogoutButton extends PureComponent {
  logout = () => {
    const { navigation, logout } = this.props;
    logout();
    navigation.navigate(Routes.LOGIN);
  };

  handleOnPress = () => {
    this.logout();
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handleOnPress}>
        <Image style={styles.image} source={img} />
      </TouchableOpacity>
    );
  }
}

LogoutButton.propTypes = {
  logout: PropTypes.func.isRequired,
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout())
});

export default connect(
  null,
  mapDispatchToProps
)(LogoutButton);
