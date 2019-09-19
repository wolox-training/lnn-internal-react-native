import React from 'react';
import { ImageBackground, TextInput, View, Image, TouchableOpacity } from 'react-native';
import headerImg from '@assets/bc_nav_bar.png';

import cancelIcon from './assets/cancel.png';
import searchIcon from './assets/ic_search.png';
import { styles } from './styles';

function Header() {
  return (
    <ImageBackground source={headerImg} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={searchIcon} style={styles.iconLeft} />
        <TextInput style={styles.textInput} />
        <TouchableOpacity>
          <Image source={cancelIcon} style={styles.iconRight} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default Header;
