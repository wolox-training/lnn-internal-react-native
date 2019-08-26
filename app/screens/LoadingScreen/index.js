import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, ActivityIndicator } from 'react-native';
import imgBackground from '@assets/bc_inicio.png';
import { ROUTES } from '@config/screens';
import LocalStorageService from '@services/LocalStorageService';

import { styles } from './styles';

import { SESSION_DATA } from '@constants';

class LoadingScreen extends Component {
  state = {
    loggedIn: false,
    loading: true
  };

  componentDidMount() {
    LocalStorageService.getStoreData(SESSION_DATA.ACCESS_TOKEN).then(res => {
      if (res) {
        this.setState({
          loggedIn: true,
          loading: false
        });
        return;
      }
      this.setState({
        loading: false
      });
    });
  }

  render() {
    const { loading, loggedIn } = this.state;
    const {
      navigation: { navigate }
    } = this.props;

    if (!loading) {
      if (loggedIn) {
        navigate(ROUTES.LIBRARY);
      } else {
        navigate(ROUTES.LOGIN);
      }
    }

    return (
      <ImageBackground style={styles.imageBackground} source={imgBackground}>
        <ActivityIndicator size="large" />
      </ImageBackground>
    );
  }
}

LoadingScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func })
};

export default LoadingScreen;
