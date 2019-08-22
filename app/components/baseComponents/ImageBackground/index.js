import React from 'react';
import imgBackground from '@assets/bc_inicio.png';

import { styles } from './styles';

function ImageBackground({ children }) {
  return (
    <ImageBackground source={imgBackground} style={styles.imageBackground}>
      {children}
    </ImageBackground>
  );
}

export default ImageBackground;
