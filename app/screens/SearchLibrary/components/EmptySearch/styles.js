import { StyleSheet } from 'react-native';
import { mediumSize } from '@scss/fonts';
import { black, softGray } from '@scss/colors';
import { SCREEN_IMAGE_SIZE } from '@constants/icons';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: '50%'
  },
  image: {
    height: SCREEN_IMAGE_SIZE,
    width: SCREEN_IMAGE_SIZE
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
