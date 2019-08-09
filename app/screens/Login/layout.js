import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, Image, View } from 'react-native';
import imgBackground from '@assets/bc_inicio.png';
import imgLogo from '@assets/logo.png';
import RFTextInput from '@app/components/baseComponents/RFTextInput';
import { white } from '@scss/colors';

import SubmitButton from './components/SubmitButton';
import { styles } from './styles';

function Login({ handleOnSubmit }) {
  return (
    <ImageBackground source={imgBackground} style={styles.imageBackground}>
      <Image source={imgLogo} />
      <View style={styles.textInputContainer}>
        <RFTextInput placeholder="Ingrese usuario..." placeholderTextColor={white} />
        <RFTextInput placeholder="Ingrese contraseña..." placeholderTextColor={white} />
      </View>
      <SubmitButton onPress={handleOnSubmit} />
    </ImageBackground>
  );
}

Login.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired
};

export default Login;
