import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

const defaultImgPath = '../../../../../assets/no_image.jpeg';

function Book({ title, author, imageUrl }) {
  return (
    <View style={styles.bookContainer} >      
      <Image
        style={styles.bookImage}
        source={imageUrl ? { uri: imageUrl } : require(defaultImgPath)}
      />
      <View style={styles.textContainer} >
        <Text style={styles.bookTitle} >
          {title}
        </Text>
        <Text style={styles.bookAuthor} >
          {author}
        </Text>
      </View>
    </View>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imageUrl: PropTypes.string
};

Book.defaultProps = {
  imageUrl: defaultImgPath
};

export default Book;
