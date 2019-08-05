import { StyleSheet } from 'react-native';

import { mediumSize } from '../../../../../scss/fonts';
import { darkGray } from '../../../../../scss/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 36
  },
  commentImage: {
    height: 50,
    width: 50,
    borderRadius: 50
  },
  textContainer: {
    flex: 1,
    marginLeft: 20
  },
  commentUser: {
    fontSize: mediumSize,
    fontWeight: 'bold'
  },
  commentText: {
    fontSize: mediumSize,
    color: darkGray,
    textAlign: 'justify'
  }
});
