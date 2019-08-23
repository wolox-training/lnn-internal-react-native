import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import img from './assets/user.png';
import { styles } from './styles';

function LogoutButton() {
  return (
    <TouchableOpacity>
      <Image style={styles.image} source={img} />
    </TouchableOpacity>
  );
}

export default LogoutButton;
