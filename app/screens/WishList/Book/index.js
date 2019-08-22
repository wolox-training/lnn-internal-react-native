import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
// eslint-disable-next-line import/extensions
import imgDefault from '@assets/no_image.jpeg';
import { bookDataPropType } from '@propTypes/BookDataPropType';

import { styles } from './styles';

function Book({ data: { image } }) {
  return <Image style={styles.image} source={image ? { uri: image } : imgDefault} />;
}

Book.propTypes = {
  data: PropTypes.shape(bookDataPropType)
};

Book.defaultProps = {
  data: {
    image: null
  }
};

export default Book;
