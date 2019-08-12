import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text, Image } from 'react-native';
// eslint-disable-next-line import/extensions
import defaultImg from '@assets/no_image.jpeg';
import { lightBlue, white } from '@scss/colors';
import Button from '@app/components/baseComponents/Button';

import { styles } from './style';

import { bookDataPropType } from '@propTypes';

function BookDetailOptions({ data: { title, author, year, genre, image } }) {
  return (
    <View style={styles.container}>
      <View style={styles.bookContainer}>
        <Image style={styles.bookCover} source={image ? { uri: image } : defaultImg} />
        <View style={styles.bookInfoContainer}>
          <Text style={styles.bookTitle}>{title}</Text>
          <Text style={styles.bookInfo}>{author}</Text>
          <Text style={styles.bookInfo}>{genre}</Text>
          <Text style={styles.bookInfo}>{year}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="ADD TO WISHLIST" containerStyle={{ backgroundColor: white, color: lightBlue }} />
        <Button title="RENT" containerStyle={{ backgroundColor: lightBlue, color: white }} />
      </View>
    </View>
  );
}

BookDetailOptions.propTypes = {
  data: PropTypes.shape(bookDataPropType)
};

BookDetailOptions.defaultProps = {
  data: {
    title: 'Title not found',
    author: 'Author not found',
    year: '-',
    genre: '-',
    image: null
  }
};

export default BookDetailOptions;
