import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, Image, View, Text } from 'react-native';
import imgBackground from '@assets/bc_inicio.png';
import imgLogo from '@assets/logo.png';
import withLoading from '@hocs/WithLoading';
import RFTextInput from '@app/components/baseComponents/RFTextInput';
import { white } from '@scss/colors';

import SubmitButton from './components/SubmitButton';
import { styles } from './styles';

const SubmitButtonWithLoading = withLoading(SubmitButton);

function Login({ handleOnSubmit, onTextChange, error, isLoading }) {
  return (
    <ImageBackground source={imgBackground} style={styles.imageBackground}>
      <View style={styles.middleContainer}>
        <Image source={imgLogo} />
        <View style={styles.textInputContainer}>
          <RFTextInput name="user" placeholder="Ingrese usuario..." onTextChange={onTextChange} />
          <RFTextInput
            name="pass"
            placeholder="Ingrese contraseña..."
            onTextChange={onTextChange}
            secureTextEntry
          />
          {error !== '' && <Text style={styles.errorText}>{error}</Text>}
        </View>
      </View>
      <SubmitButtonWithLoading onPress={handleOnSubmit} isLoading={isLoading} />
      <Text style={styles.footerText}>Designed, developed and used by woloxers</Text>
    </ImageBackground>
  );
}

Login.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onTextChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default Login;
