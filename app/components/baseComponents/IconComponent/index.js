import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ICON_ROUTES, DEFAULT_ROUTE_ICON } from './constants';

function IconComponent({ name, size, color, routeName }) {
  const iconName = name || ICON_ROUTES[routeName.toLowerCase()] || DEFAULT_ROUTE_ICON;
  return <Icon name={iconName} size={size} color={color} />;
}

IconComponent.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  name: PropTypes.string,
  routeName: PropTypes.string
};

export default IconComponent;
