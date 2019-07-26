import React from 'react';
import { StyleSheet, View } from 'react-native';

import { mainBackgroundColor } from '../../../scss/colors';

import BookDetailOptions from './components/BookDetailOptions';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: mainBackgroundColor,
    flex: 1
  }
});

function BookDetail(props) {
  return (
    <View style={styles.container}>
      <BookDetailOptions {...props} />
    </View>
  );
}

export default BookDetail;
