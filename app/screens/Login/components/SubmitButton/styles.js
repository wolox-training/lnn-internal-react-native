import { StyleSheet } from 'react-native';
import { white } from '@scss/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: white,
    paddingVertical: 10,
    width: 250,
    marginBottom: 30
  },
  text: {
    color: white,
    fontSize: 15,
    fontWeight: 'bold'
  }
});
