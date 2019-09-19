import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { white } from '@scss/colors';

import { styles } from './styles';

class RFTextInput extends PureComponent {
  handleOnChangeText = text => {
    const { name, onTextChange } = this.props;
    onTextChange(text, name);
  };

  render() {
    const { placeholder, placeholderTextColor, secureTextEntry, value, keyboardType } = this.props;
    return (
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        onChangeText={this.handleOnChangeText}
        value={value}
        keyboardType={keyboardType}
      />
    );
  }
}

RFTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
  keyboardType: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  value: PropTypes.string
};

RFTextInput.defaultProps = {
  placeholderTextColor: white,
  secureTextEntry: false
};

export default RFTextInput;
