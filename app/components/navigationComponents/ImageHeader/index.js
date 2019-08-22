import React from 'react';
import { Image } from 'react-native';
import headerImg from '@assets/bc_nav_bar.png';

import { styles } from './styles';

function ImageHeader() {
  return <Image style={styles.image} source={headerImg} />;
}

export default ImageHeader;
