import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actionCreators from '@redux/Books/actions';

import Library from './layout';
import Book from './components/Book';

class LibraryContainer extends Component {
  componentDidMount() {
    const { getAllBooks } = this.props;
    getAllBooks();
  }

  renderBook = ({ item }) => <Book data={item} {...this.props} />;

  keyExtractor = item => item.id.toString();

  render() {
    const { books, error, isLoading } = this.props;
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
  books: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getAllBooks: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
  error: PropTypes.string
};

const mapDispatchToProps = dispatch => ({
  getAllBooks: () => dispatch(actionCreators.getAllBooks())
});

const mapStateToProps = state => ({
  isLoading: state.books.isLoading,
  error: state.books.error,
  books: state.books.books
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LibraryContainer);
