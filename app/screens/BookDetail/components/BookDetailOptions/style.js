import { StyleSheet } from 'react-native';

import { hightSize, mediumSize } from '../../../../../scss/fonts';
import { darkGray } from '../../../../../scss/colors';

export const styles = StyleSheet.create({
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
    fontSize: hightSize,
    fontWeight: 'bold',
    paddingVertical: 2
  },
  bookInfo: {
    fontSize: mediumSize,
    color: darkGray
  }
});
