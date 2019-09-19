import { StyleSheet } from 'react-native';
import { mediumSize } from '@scss/fonts';
import { black, softGray } from '@scss/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: '50%'
  },
  image: {
    height: 40,
    width: 40
  },
  title: {
    fontSize: mediumSize,
    fontWeight: 'bold',
    marginVertical: 10,
    color: black
  },
  subtitle: {
    fontSize: mediumSize,
    color: softGray
  }
});
