import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

function IconComponent({ name, size, color }) {
  return <Icon name={name} size={size} color={color} />;
}

IconComponent.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

export default IconComponent;
