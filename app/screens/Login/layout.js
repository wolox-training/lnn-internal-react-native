import React from 'react';
import { ImageBackground, Text } from 'react-native';
import imgBackground from '@assets/ic_back.png';

import { styles } from './styles';

function Login() {
  return (
    <ImageBackground source={imgBackground} style={styles.imageBackground}>
      <Text>login</Text>
    </ImageBackground>
  );
}

export default Login;
