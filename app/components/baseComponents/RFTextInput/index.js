import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextInput, View } from 'react-native';
import { black } from '@scss/colors';

import { styles } from './styles';

class RFTextInput extends PureComponent {
  onChangeText = () => true;

  render() {
    const { placeholder, placeholderTextColor, secureTextEntry } = this.props;
    return (
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
      />
    );
  }
}

RFTextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  placeholderTextColor: PropTypes.string,
  secureTextEntry: PropTypes.bool
};

RFTextInput.defaultProps = {
  placeholderTextColor: black,
  secureTextEntry: false
};

export default RFTextInput;
