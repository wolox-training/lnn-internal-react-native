import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextInput, View } from 'react-native';
import { black } from '@scss/colors';

import { styles } from './styles';

class RFTextInput extends PureComponent {
  handleOnChangeText = text => {
    const { name, onTextChange } = this.props;
    onTextChange(text, name);
  };

  render() {
    const { placeholder, placeholderTextColor, secureTextEntry } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          onChangeText={this.handleOnChangeText}
        />
      </View>
    );
  }
}

RFTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
  placeholderTextColor: PropTypes.string,
  secureTextEntry: PropTypes.bool
};

RFTextInput.defaultProps = {
  placeholderTextColor: black,
  secureTextEntry: false
};

export default RFTextInput;
