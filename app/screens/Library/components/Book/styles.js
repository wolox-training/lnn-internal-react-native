import { StyleSheet } from 'react-native';

import { elevationShadowStyle } from '../../../../../utils';
import { white, darkGray, softGray } from '../../../../../scss/colors';
import { mediumSize } from '../../../../../scss/fonts';

const elevation = 5;

export const styles = StyleSheet.create({
  bookContainer: {
    backgroundColor: white,
    borderRadius: 5,
    height: 90,
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginHorizontal: 20,
    marginVertical: 5
  },
  shadowBox: elevationShadowStyle(elevation),
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
