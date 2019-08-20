import { StyleSheet } from 'react-native';
import { lightBlue } from '@scss/colors';

export const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: lightBlue,
    height: 45,
    marginVertical: 5
  },
  buttonText: {
    fontWeight: 'bold'
  }
});
