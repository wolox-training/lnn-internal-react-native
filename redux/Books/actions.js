import BookService from '@services/BookService';

export const actionTypes = {
  GET_BOOKS: 'GET_BOOKS',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: 'GET_BOOKS_FAILURE'
};

const getAllBooks = () => dispatch => {
  dispatch({ type: actionTypes.GET_BOOKS });
  BookService.getBooks().then(res => {
    if (!res.ok) {
      return dispatch({ type: actionTypes.GET_BOOKS_FAILURE, res });
    }
    return dispatch({ type: actionTypes.GET_BOOKS_SUCCESS, res });
  });
};

const actionCreators = {
  getAllBooks
};

export default actionCreators;
