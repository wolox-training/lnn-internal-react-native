import React from 'react';
import { PropTypes } from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

function Button({ title, containerStyle: { backgroundColor, color } }) {
  return (
    <TouchableOpacity style={[styles.buttonContainer, { backgroundColor }]}>
      <Text style={[styles.buttonText, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  containerStyle: PropTypes.shape({ backgroundColor: PropTypes.string, color: PropTypes.string })
};

export default Button;
