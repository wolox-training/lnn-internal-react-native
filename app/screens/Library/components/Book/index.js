import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { bookDataPropType } from '../../../../../propTypes';
import defaultImg from '../../../../../assets/no_image.jpeg';

import { styles } from './styles';

function Book({ data, data: { title, author, image_url: imageUrl }, onBookClick }) {
  return (
    // eslint-disable-next-line react/jsx-no-bind
    <TouchableOpacity style={styles.bookContainer} onPress={() => onBookClick(data)}>
      <Image style={styles.bookImage} source={imageUrl ? { uri: imageUrl } : defaultImg} />
      <View>
        <Text style={styles.bookTitle}>{title}</Text>
        <Text style={styles.bookAuthor}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

Book.propTypes = {
  data: PropTypes.shape(bookDataPropType).isRequired,
  onBookClick: PropTypes.func
};

export default Book;
