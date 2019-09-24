import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookService from '@services/BookService';

import Book from '../Library/components/Book';

import SearchLibrary from './layout';

class SearchLibraryContainer extends Component {
  state = {
    isLoading: true,
    books: [],
    searchBooks: []
  };

  componentDidMount() {
    const {
      navigation: { setParams }
    } = this.props;
    this.getBooks();
    setParams({
      onChangeText: this.handleOnChangeText,
      onClear: this.handleOnClear
    });
  }

  getBooks = () => {
    BookService.getBooks().then(res => {
      if (res.ok) {
        return this.setState({ books: res.data.page, searchBooks: res.data.page, isLoading: false });
      }
      return this.setState({ isLoading: false });
    });
  };

  handleOnChangeText = text => {
    this.setState(prevState => ({
      searchBooks: prevState.books.filter(item => item.title.toUpperCase().includes(text.toUpperCase()))
    }));
  };

  handleOnClear = () => {
    this.setState(prevState => ({ searchBooks: prevState.books }));
  };

  renderItem = ({ item }) => <Book data={item} {...this.props} />;

  keyExtractor = item => item.id.toString();

  render() {
    const { isLoading, searchBooks } = this.state;
    return (
      <SearchLibrary
        data={searchBooks}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        isLoading={isLoading}
      />
    );
  }
}

SearchLibraryContainer.propTypes = {
  navigation: PropTypes.shape(PropTypes.func.isRequired)
};

export default SearchLibraryContainer;
