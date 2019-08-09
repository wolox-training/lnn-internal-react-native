import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextInput, View } from 'react-native';
import { black } from '@scss/colors';

import { styles } from './styles';

class RFTextInput extends PureComponent {
  onChangeText = () => true;

  render() {
    const { placeholder, placeholderTextColor } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
        />
      </View>
    );
  }
}

RFTextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  placeholderTextColor: PropTypes.string
};

RFTextInput.defaultProps = {
  placeholderTextColor: black
};

export default RFTextInput;
