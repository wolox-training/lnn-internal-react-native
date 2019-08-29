import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Text } from 'react-native';
import { bookDataPropTypes } from '@propTypes/BookDataPropTypes';

import { styles } from './styles';

function Library({ data, renderBook, keyExtractor, error }) {
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderBook} keyExtractor={keyExtractor} />
      {error !== '' && (
        <View style={styles.errorTextContainer}>
          <Text>{error}</Text>
        </View>
      )}
    </View>
  );
}

Library.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(bookDataPropTypes)).isRequired,
  keyExtractor: PropTypes.func.isRequired,
  renderBook: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default Library;
