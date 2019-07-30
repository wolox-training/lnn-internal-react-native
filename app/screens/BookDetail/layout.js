import React from 'react';
import { View } from 'react-native';

import BookDetailOptions from './components/BookDetailOptions';
import Comments from './components/Comments';
import { styles } from './styles';

function BookDetail(props) {
  return (
    <View style={styles.container}>
      <BookDetailOptions {...props} />
      <Comments user="Jhon" comment="Comentairo de prueba" />
    </View>
  );
}

export default BookDetail;
