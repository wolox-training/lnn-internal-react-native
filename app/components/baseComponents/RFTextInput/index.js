import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { white } from '@scss/colors';

import { styles } from './styles';

function RFTextInput({ placeholder, placeholderTextColor, secureTextEntry }) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={secureTextEntry}
    />
  );
}

RFTextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  placeholderTextColor: PropTypes.string,
  secureTextEntry: PropTypes.bool
};

RFTextInput.defaultProps = {
  placeholderTextColor: white,
  secureTextEntry: false
};

export default RFTextInput;
