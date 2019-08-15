import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Text } from 'react-native';

import { styles } from './styles';

import { bookDataPropType } from '@propTypes';

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
  data: PropTypes.arrayOf(PropTypes.shape(bookDataPropType)).isRequired,
  keyExtractor: PropTypes.func.isRequired,
  renderBook: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default Library;
