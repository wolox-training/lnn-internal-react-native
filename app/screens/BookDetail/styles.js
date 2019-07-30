import { StyleSheet } from 'react-native';

import { elevationShadowStyle } from '../../../utils';
import { mainBackgroundColor, white } from '../../../scss/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainBackgroundColor,
    paddingVertical: 15
  },
  componentsContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: white,
    ...elevationShadowStyle(2)
  }
});
