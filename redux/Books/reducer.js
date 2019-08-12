const initialState = {
  books: [],
  isLoading: true,
  error: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.res.data.page,
        isLoading: false
      };
    case 'GET_BOOKS_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.res.error
      };
    default:
      return { ...state };
  }
}

export default reducer;
