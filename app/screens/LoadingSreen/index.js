import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import ImageBackground from '@app/components/ImageBackground';
// import { ROUTES } from '@config/screens';

class LoadingScreen extends Component {
  state = {
    loggedIn: false,
    loading: true
  };

  componentDidMount() {
    // TODO: View store data
  }

  render() {
    const { loading, loggedIn } = this.state;
    if (!loading) {
      if (loggedIn) {
        return this.props.navigation.navigate('library');
      }
      return this.props.navigation.navigate('login');
    }

    return (
      <ImageBackground>
        <ActivityIndicator />
      </ImageBackground>
    );
  }
}

LoadingScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func })
};

export default LoadingScreen;
