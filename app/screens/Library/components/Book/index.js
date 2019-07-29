import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import defaultImg from '../../../../../assets/no_image.jpeg';

import { styles } from './styles';

function Book({ title, author, imageUrl }) {
  return (
    <View style={styles.bookContainer}>
      <Image style={styles.bookImage} source={imageUrl ? { uri: imageUrl } : defaultImg} />
      <View>
        <Text style={styles.bookTitle}>{title}</Text>
        <Text style={styles.bookAuthor}>{author}</Text>
      </View>
    </View>
  );
}

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string
};

export default Book;
