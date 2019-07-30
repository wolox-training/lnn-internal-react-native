import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text, Image } from 'react-native';

import defaultImg from '../../../../../assets/img_book1@2x.png.png';
import Button from '../../../../components/baseComponents/Button';
import { lightBlue, white } from '../../../../../scss/colors';

import { styles } from './style';

function BookDetailOptions({ data: { title, author, year, genre, image_url: imageUrl } }) {
  return (
    <View style={styles.container}>
      <View style={styles.bookContainer}>
        <Image style={styles.bookCover} source={imageUrl ? { uri: imageUrl } : defaultImg} />
        <View>
          <Text style={styles.bookTitle}>{title}</Text>
          <View>
            <Text style={styles.bookInfo}>{author}</Text>
            <Text style={styles.bookInfo}>{genre}</Text>
            <Text style={styles.bookInfo}>{year}</Text>
          </View>
        </View>
      </View>
      <View>
        <Button title="ADD TO WISHLIST" containerStyle={{ backgroundColor: white, color: lightBlue }} />
        <Button title="RENT" containerStyle={{ backgroundColor: lightBlue, color: white }} />
      </View>
    </View>
  );
}

BookDetailOptions.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    imageUrl: PropTypes.string
  })
};

export default BookDetailOptions;
