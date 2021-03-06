import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bookDataPropTypes } from '@propTypes/BookDataPropTypes';

import { COMMENT_DATA } from './constants';
import Comment from './components/Comment';
import BookDetail from './layout';

class BookDetailContainer extends Component {
  onPressAdd = () => null;

  onPressRent = () => null;

  renderComment = ({ item }) => <Comment data={item} />;

  keyExtractor = item => item.id.toString();

  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    return (
      <BookDetail
        bookData={params}
        handleAdd={this.onPressAdd}
        handleRent={this.onPressRent}
        commentsData={COMMENT_DATA}
        renderComment={this.renderComment}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

BookDetailContainer.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({ params: PropTypes.shape(bookDataPropTypes) })
  })
};

export default BookDetailContainer;
