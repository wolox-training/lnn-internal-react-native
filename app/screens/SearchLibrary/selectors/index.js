import { createSelector } from 'reselect';

const searchText = state => state.searchText;
const books = state => state.books;

export const getFilteredBooksSelector = createSelector(
  books,
  searchText,
  (booksArray, text) => booksArray.filter(item => item.title.toUpperCase().includes(text.toUpperCase()))
);
