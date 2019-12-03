import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Animated, TouchableWithoutFeedback, View } from 'react-native';

import checkImage from './assets/check.png';
import { BUTTON_RADIUS_SIZE } from './constants';
import { styles } from './styles';

class AnimatedButton extends Component {
  state = {
    width: new Animated.Value(BUTTON_RADIUS_SIZE),
    fadeImage: new Animated.Value(0),
    fadeText: new Animated.Value(1)
  };

  handleOnPress = () => {
    Animated.parallel([
      Animated.spring(this.state.width, {
        toValue: 45,
        friction: 10
      }),
      Animated.sequence([
        Animated.timing(this.state.fadeText, {
          toValue: 0,
          duration: 500
        }),
        Animated.timing(this.state.fadeImage, {
          toValue: 1,
          duration: 500
        })
      ])
    ]).start();
  };

  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handleOnPress}>
          <Animated.View style={[styles.buttonContainer, { width: this.state.width }]}>
            <Animated.Image style={[styles.image, { opacity: this.state.fadeImage }]} source={checkImage} />
            <Animated.Text style={[styles.buttonText, { opacity: this.state.fadeText }]}>
              {title}
            </Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

AnimatedButton.propTypes = {
  title: PropTypes.string.isRequired,
  containerStyle: PropTypes.shape({ backgroundColor: PropTypes.string, color: PropTypes.string })
};

export default AnimatedButton;
