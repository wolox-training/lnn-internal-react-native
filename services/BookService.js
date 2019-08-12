import api from '../config/api';

export default {
  getBooks: () => api.get('/books'),
  getBookDetail: id => api.get('/books', { id })
};
