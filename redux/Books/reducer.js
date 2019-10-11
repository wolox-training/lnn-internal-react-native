import { actionTypes } from './actions';

const initialState = {
  books: [],
  booksLoading: false,
  booksError: null
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GET_BOOKS:
      return { ...state, booksLoading: true };
    case actionTypes.GET_BOOKS_SUCCESS:
      return { ...state, books: payload, booksLoading: false };
    case actionTypes.GET_BOOKS_FAILURE:
      return { ...state, booksLoading: false, booksError: payload };

    default:
      return state;
  }
}
