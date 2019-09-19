import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { bookDataPropTypes } from '@propTypes/BookDataPropTypes';

import EmptySearch from './components/EmptySearch';
import { styles } from './styles';

function SearchLibrary({ data, renderItem, keyExtractor }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={EmptySearch}
      />
    </View>
  );
}

SearchLibrary.propTypes = {
  keyExtractor: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape(bookDataPropTypes))
};

export default SearchLibrary;
