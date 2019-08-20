import { StyleSheet } from 'react-native';
import { white, darkGray, softGray } from '@scss/colors';
import { mediumSize } from '@scss/fonts';

import { elevationShadowStyle } from '@utils';

export const styles = StyleSheet.create({
  bookContainer: {
    ...elevationShadowStyle(2),
    backgroundColor: white,
    borderRadius: 5,
    height: 90,
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginHorizontal: 20,
    marginVertical: 5
  },
  bookImage: {
    height: 60,
    width: 40,
    marginRight: 10
  },
  bookTitle: {
    color: darkGray,
    fontSize: mediumSize,
    fontWeight: 'bold'
  },
  bookAuthor: {
    color: softGray,
    fontSize: mediumSize
  }
});
