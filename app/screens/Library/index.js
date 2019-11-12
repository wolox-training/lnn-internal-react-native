import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreators } from '@redux/Books/actions';
import withLoading from '@hocs/WithLoading';
import { bookDataPropTypes } from '@propTypes/BookDataPropTypes';

import Library from './layout';
import Book from './components/Book';

const LibraryWithLoading = withLoading(Library);
class LibraryContainer extends Component {
  componentDidMount() {
    const { getBooks } = this.props;
    getBooks();
  }

  renderBook = ({ item }) => <Book data={item} {...this.props} />;

  keyExtractor = item => item.id.toString();

  render() {
    const { books, error, isLoading } = this.props;
    const optionalBooks = [
      {
        author: 'Lucas Nestrojil',
        genre: 'Drama',
        id: 1,
        editor: 'lalala',
        title: 'Historia',
        year: 2019,
        image: undefined
      }
    ];
    return (
      <LibraryWithLoading
        data={optionalBooks || books}
        renderBook={this.renderBook}
        keyExtractor={this.keyExtractor}
        error={error}
        isLoading={isLoading}
      />
    );
  }
}

LibraryContainer.propTypes = {
  getBooks: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
  books: PropTypes.arrayOf(PropTypes.shape(bookDataPropTypes)),
  error: PropTypes.string
};

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(actionCreators.getBooks())
});

const mapStateToProps = state => ({
  isLoading: state.books.booksLoading,
  error: state.books.booksError,
  books: state.books.books.page
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LibraryContainer);
