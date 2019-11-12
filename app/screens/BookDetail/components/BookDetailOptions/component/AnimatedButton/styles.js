import { StyleSheet } from 'react-native';
import { lightBlue } from '@scss/colors';
import { ICON_IMAGE_SIZE } from '@constants/icons';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
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
    color: lightBlue,
    fontWeight: 'bold',
    position: 'absolute'
  },
  image: {
    height: ICON_IMAGE_SIZE,
    width: ICON_IMAGE_SIZE
  }
});
