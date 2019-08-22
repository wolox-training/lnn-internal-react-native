import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { bookDataPropType } from '@propTypes/BookDataPropType';
import { commentDataPropType } from '@propTypes/CommentDataPropType';

import BookDetailOptions from './components/BookDetailOptions';
import { styles } from './styles';

function BookDetail({ bookData, commentsData, renderComment, keyExtractor }) {
  return (
    <View style={styles.container}>
      <BookDetailOptions data={bookData} />
      <View style={styles.commentsContainer}>
        <FlatList data={commentsData} renderItem={renderComment} keyExtractor={keyExtractor} />
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

BookDetail.propTypes = {
  bookData: PropTypes.shape(bookDataPropType).isRequired,
  commentsData: PropTypes.arrayOf(PropTypes.shape(commentDataPropType)).isRequired,
  keyExtractor: PropTypes.func.isRequired,
  renderComment: PropTypes.func.isRequired
};

export default BookDetail;
