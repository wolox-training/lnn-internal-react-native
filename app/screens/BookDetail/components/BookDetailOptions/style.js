import { StyleSheet } from 'react-native';

import { elevationShadowStyle } from '../../../../../utils';
import { hightSize, mediumSize } from '../../../../../scss/fonts';
import { darkGray, white } from '../../../../../scss/colors';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: white,
    ...elevationShadowStyle(2)
  },
  bookContainer: {
    flexDirection: 'row'
  },
  bookCover: {
    width: 70,
    height: 100,
    marginRight: 20
  },
  bookInfoContainer: {
    flex: 1
  },
  bookTitle: {
    color: darkGray,
    fontSize: hightSize,
    fontWeight: 'bold',
    paddingVertical: 2
  },
  bookInfo: {
    fontSize: mediumSize,
    color: darkGray
  },
  buttonContainer: {
    marginVertical: 15
  }
});
