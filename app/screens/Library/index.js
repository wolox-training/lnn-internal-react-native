import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DATA } from '@constants/index';
import BooksService from '@services/BookServices';

import Library from './layout';
import Book from './components/Book';

class LibraryContainer extends Component {
  componentDidMount() {
    const res = BooksService.getBooks();
    console.warn(res.status);
  }

  renderBook = ({ item }) => <Book data={item} {...this.props} />;

  keyExtractor = item => item.id.toString();

  render() {
    return <Library data={DATA} renderBook={this.renderBook} keyExtractor={this.keyExtractor} />;
  }
}

LibraryContainer.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func })
};

export default LibraryContainer;
