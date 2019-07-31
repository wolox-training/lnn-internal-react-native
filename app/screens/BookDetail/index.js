import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bookDataPropType } from '../../../propTypes';

import BookDetail from './layout';

class BookDetailContainer extends Component {
  onPressAdd = () => null;

  onPressRent = () => null;

  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    return <BookDetail data={params} handleAdd={this.onPressAdd} handleRent={this.onPressRent} />;
  }
}

BookDetailContainer.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({ params: PropTypes.shape(bookDataPropType) })
  })
};

export default BookDetailContainer;
