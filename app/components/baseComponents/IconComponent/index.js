import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ICON_ROUTES, DEFAULT_ROUTE_ICON } from './constants';

function IconComponent({ name, size, color, routeName }) {
  const iconRouteName = ICON_ROUTES[routeName.toLowerCase()] || DEFAULT_ROUTE_ICON;
  const iconName = name || iconRouteName;
  return <Icon name={iconName} size={size} color={color} />;
}

IconComponent.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  name: PropTypes.string,
  routeName: PropTypes.string
};

IconComponent.defaultProps = {
  routeName: ''
};

export default IconComponent;
