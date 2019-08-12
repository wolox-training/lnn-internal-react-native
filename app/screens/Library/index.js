import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BooksService from '@services/BookServices';

import Library from './layout';
import Book from './components/Book';

class LibraryContainer extends Component {
  state = {
    isLoading: true,
    books: [],
    error: ''
  };

  componentDidMount() {
    BooksService.getBooks().then(response => {
      if (response.ok) {
        this.setState({ books: response.data.page, isLoading: false });
      } else {
        this.setState({ error: 'No se pudieron cargar los datos', isLoading: false });
      }
    });
  }

  renderBook = ({ item }) => <Book data={item} {...this.props} />;

  keyExtractor = item => item.id.toString();

  render() {
    const { books, error, isLoading } = this.state;
    return (
      <Library
        data={books}
        renderBook={this.renderBook}
        keyExtractor={this.keyExtractor}
        error={error}
        isLoading={isLoading}
      />
    );
  }
}

LibraryContainer.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func })
};

export default LibraryContainer;
