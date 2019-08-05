import PropTypes from 'prop-types';

export const bookDataPropType = {
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  publisher: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  // eslint-disable-next-line camelcase
  image_url: PropTypes.string
};
