import { StyleSheet } from 'react-native';
import { white } from '@scss/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: white,
    paddingVertical: 10,
    paddingHorizontal: 100
  },
  text: {
    color: white
  }
});
