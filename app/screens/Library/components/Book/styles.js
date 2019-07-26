import { StyleSheet } from 'react-native';

import { white, darkGray, softGray } from '../../../../../scss/colors';
import { mediumSize } from '../../../../../scss/fonts';

export const styles = StyleSheet.create({
  bookContainer: {
    backgroundColor: white,
    borderRadius: 5,
    height: 90,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#000',
    shadowOpacity: 1.0,
    shadowRadius: 5,
    elevation: 8,
    flexDirection: 'row',
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
