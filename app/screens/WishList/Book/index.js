import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
// eslint-disable-next-line import/extensions
import imgDefault from '@assets/no_image.jpeg';

import { styles } from './styles';

import { bookDataPropType } from '@propTypes';

function Book({ data: { image_url: imageUrl } }) {
  return <Image style={styles.image} source={imageUrl ? { uri: imageUrl } : imgDefault} />;
}

Book.propTypes = {
  data: PropTypes.shape(bookDataPropType)
};

Book.defaultProps = {
  data: {
    // eslint-disable-next-line camelcase
    image_url: null
  }
};

export default Book;
