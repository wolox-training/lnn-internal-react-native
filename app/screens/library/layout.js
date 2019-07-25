import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import Book from './components/Book';
import img from './assets/img_book1.png';

function Library() {
  return (
    <View style={styles.container}>
    <Book
      title='A Little Bird Told Me'
      author='Timothy Cross'
      img={img}
    />
    </View>
  );
}

export default Library;
