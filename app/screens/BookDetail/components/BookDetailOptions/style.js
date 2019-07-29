import { StyleSheet } from 'react-native';

import { elevationShadowStyle } from '../../../../../utils'
import { mediumSize, smallSize } from '../../../../../scss/fonts';
import { darkGray, white } from '../../../../../scss/colors';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: white,
    ...elevationShadowStyle(2)
  },
  bookContainer: {
    flexDirection: 'row',
    marginBottom: 30
  },
  bookCover: {
    width: 70,
    height: 100,
    marginRight: 20
  },
  bookTitle: {
    color: darkGray,
    fontSize: mediumSize,
    fontWeight: 'bold',
    paddingVertical: 2
  },
  bookInfo: {
    fontSize: smallSize,
    color: darkGray
  }
});