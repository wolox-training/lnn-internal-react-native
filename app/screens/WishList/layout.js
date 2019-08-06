import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';

import { styles } from './styles';

import { bookDataPropType } from '@propTypes';

function Wishlist({ books, renderItem }) {
  return (
    <View style={styles.container}>
      <FlatList data={books} renderItem={renderItem} numColumns={6} />
    </View>
  );
}

Wishlist.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape(bookDataPropType)).isRequired,
  renderItem: PropTypes.func.isRequired
};

export default Wishlist;
