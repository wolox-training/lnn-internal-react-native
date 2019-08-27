import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

class SubmitButton extends PureComponent {
  handleOnPress = () => {
    const { onPress } = this.props;
    onPress();
  };

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.handleOnPress}>
        <Text style={styles.text}>INGRESAR</Text>
      </TouchableOpacity>
    );
  }
}

SubmitButton.propTypes = {
  onPress: PropTypes.func.isRequired
};

export default SubmitButton;
