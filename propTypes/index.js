/* eslint-disable camelcase */
import PropTypes from 'prop-types';

export const bookDataPropType = {
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  editor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  image: PropTypes.string
};

export const commentDataPropType = {
  user_name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  image_url: PropTypes.string
};
