import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import defaultImg from '../../../../../assets/no_image.jpeg';

import { styles } from './styles';

function Book({ data, data: { title, author, image_url: imageUrl }, handleBookClick }) {
  return (
    <TouchableOpacity style={styles.bookContainer} onPress={() => handleBookClick(data)}>
      <Image style={styles.bookImage} source={imageUrl ? { uri: imageUrl } : defaultImg} />
      <View>
        <Text style={styles.bookTitle}>{title}</Text>
        <Text style={styles.bookAuthor}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

Book.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string
};

export default Book;
