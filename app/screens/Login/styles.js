import { StyleSheet } from 'react-native';
import { red } from '@scss/colors';

export const styles = StyleSheet.create({
  middleContainer: {
    width: '100%',
    alignItems: 'center'
  },
  textInputContainer: {
    width: '80%',
    marginTop: 30
  },
  footerText: {
    position: 'absolute',
    bottom: 15
  },
  errorContainer: {
    alignSelf: 'center'
  },
  errorText: {
    color: red,
    fontSize: 12
  }
});
