import { StyleSheet } from 'react-native';
import { white } from '@scss/colors';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 5
  },
  textInput: {
    borderRadius: 5,
    borderColor: white,
    borderWidth: 0.7,
    color: white,
    paddingLeft: 10,
    height: 40
  }
});
