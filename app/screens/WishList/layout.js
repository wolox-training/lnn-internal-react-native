import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { bookDataPropTypes } from '@propTypes/BookDataPropTypes';

import { styles } from './styles';

function Wishlist({ books, renderItem }) {
  return (
    <View style={styles.container}>
      <FlatList data={books} renderItem={renderItem} numColumns={6} />
    </View>
  );
}

Wishlist.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape(bookDataPropTypes)).isRequired,
  renderItem: PropTypes.func.isRequired
};

export default Wishlist;
