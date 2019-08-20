import React from 'react';
import { Image } from 'react-native';

import backImg from './assets/ic_back.png';
import { styles } from './styles';

function BackButtonHeader() {
  return <Image style={styles.image} source={backImg} />;
}

export default BackButtonHeader;
