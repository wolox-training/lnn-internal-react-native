import React from 'react';
import { View, FlatList, Text } from 'react-native';

import { styles } from './styles';

function Library({ data, renderBook, keyExtractor }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderBook}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

export default Library;
