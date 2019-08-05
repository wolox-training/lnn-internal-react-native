import React from 'react';
import { View } from 'react-native';

import BookDetailOptions from './components/BookDetailOptions';
import { styles } from './styles';

function BookDetail(props) {
  return (
    <View style={styles.container}>
      <BookDetailOptions {...props} />
    </View>
  );
}

export default BookDetail;
