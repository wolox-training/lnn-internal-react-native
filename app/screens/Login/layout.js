import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, Image, View, Text } from 'react-native';
import imgBackground from '@assets/bc_inicio.png';
import imgLogo from '@assets/logo.png';
import RFTextInput from '@app/components/baseComponents/RFTextInput';
import { white } from '@scss/colors';

import SubmitButton from './components/SubmitButton';
import { styles } from './styles';

function Login({ handleOnSubmit }) {
  return (
    <ImageBackground source={imgBackground} style={styles.imageBackground}>
      <View style={styles.middleContainer}>
        <Image source={imgLogo} />
        <View style={styles.textInputContainer}>
          <RFTextInput placeholder="Ingrese usuario..." />
          <RFTextInput placeholder="Ingrese contraseña..." secureTextEntry />
        </View>
      </View>
      <SubmitButton onPress={handleOnSubmit} />
      <Text style={styles.footerText}>Designed, developed and used by woloxers</Text>
    </ImageBackground>
  );
}

Login.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired
};

export default Login;
