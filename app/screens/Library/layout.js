import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';

import { styles } from './styles';

function Library({ data, renderBook, keyExtractor }) {
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderBook} keyExtractor={keyExtractor} />
    </View>
  );
}

Library.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      publisher: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      // eslint-disable-next-line camelcase
      image_url: PropTypes.string
    })
  ).isRequired,
  keyExtractor: PropTypes.func.isRequired,
  renderBook: PropTypes.func.isRequired
};

export default Library;
