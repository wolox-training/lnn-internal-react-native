import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

import imgDefault from '../../../../assets/no_image.jpeg';
import { bookDataPropType } from '../../../../propTypes';

import { styles } from './styles';

function Book({ data: { image_url: imageUrl } }) {
  return <Image style={styles.image} source={imageUrl ? { uri: imageUrl } : imgDefault} />;
}

Book.propTypes = {
  data: PropTypes.shape(bookDataPropType).isRequired
};

export default Book;
