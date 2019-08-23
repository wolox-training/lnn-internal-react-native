import React from 'react';
import { Image } from 'react-native';

import img from './assets/user.png';
import { styles } from './styles';

function LogoutButton() {
  return <Image style={styles.image} source={img} />;
}

export default LogoutButton;
