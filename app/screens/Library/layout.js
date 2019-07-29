import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';

import { bookDataPropType } from '../../../propTypes/BookData';

import { styles } from './styles';

function Library({ data, renderBook, keyExtractor }) {
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderBook} keyExtractor={keyExtractor} />
    </View>
  );
}

Library.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(bookDataPropType)).isRequired,
  keyExtractor: PropTypes.func.isRequired,
  renderBook: PropTypes.func.isRequired
};

export default Library;
