import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { bookDataPropType } from '../../../../../propTypes';
import defaultImg from '../../../../../assets/no_image.jpeg';

import { styles } from './styles';

function Book({ data, data: { title, author, image_url: imageUrl }, handleBookClick }) {
  return (
    <TouchableOpacity style={styles.bookContainer} onPress={handleBookClick(data)}>
      <Image style={styles.bookImage} source={imageUrl ? { uri: imageUrl } : defaultImg} />
      <View>
        <Text style={styles.bookTitle}>{title}</Text>
        <Text style={styles.bookAuthor}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

Book.propTypes = {
  handleBookClick: PropTypes.func.isRequired,
  data: PropTypes.shape(bookDataPropType)
};

Book.defaultProps = {
  data: {
    title: 'Title not found',
    author: 'Author not found',
    // eslint-disable-next-line camelcase
    image_url: null
  }
};

export default Book;
