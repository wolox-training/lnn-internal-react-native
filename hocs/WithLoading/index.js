/* eslint-disable react/prop-types */
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { styles } from './styles';

const withLoading = WrappedComponent => ({ isLoading, ...props }) =>
  isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  ) : (
    <WrappedComponent {...props} />
  );

export default withLoading;
