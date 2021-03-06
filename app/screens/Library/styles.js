import { StyleSheet } from 'react-native';
import { mainBackgroundColor } from '@scss/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainBackgroundColor,
    paddingTop: 40,
    justifyContent: 'center'
  },
  errorTextContainer: {
    alignSelf: 'center'
  }
});
