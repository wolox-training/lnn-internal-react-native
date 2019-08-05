import { StyleSheet } from 'react-native';

import { elevationShadowStyle } from '../../../utils';
import { mainBackgroundColor, white, lightBlue } from '../../../scss/colors';
import { mediumSize } from '../../../scss/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainBackgroundColor,
    paddingTop: 35
  },
  commentsContainer: {
    flex: 1,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: white,
    ...elevationShadowStyle(2)
  },
  viewAllText: {
    alignSelf: 'center',
    color: lightBlue,
    fontSize: mediumSize
  }
});
