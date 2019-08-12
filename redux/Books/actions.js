import BookService from '@services/BookService';

const getAllBooks = () => dispatch => {
  BookService.getBooks().then(res => {
    if (!res.ok) {
      return dispatch({ type: 'GET_BOOKS_FAILURE', res });
    }
    return dispatch({ type: 'GET_BOOKS_SUCCESS', res });
  });
};

const actionCreators = {
  getAllBooks
};

export default actionCreators;
