import { StyleSheet } from 'react-native';

import { white, darkGray, softGray } from '../../../../../scss/colors';
import { mediumSize } from '../../../../../scss/fonts';

export const styles = StyleSheet.create({
  bookContainer: {
    flexDirection: 'row',
    height: 90,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: white
  },
  bookImage: {
    height: 60,
    width: 40,
    marginRight: 10
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  bookTitle: {
    fontSize: mediumSize,
    fontWeight: 'bold',
    color: darkGray
  },
  bookAuthor: {
    fontSize: mediumSize,
    color: softGray
  }
});
