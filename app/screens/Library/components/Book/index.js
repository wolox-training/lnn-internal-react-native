import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { bookDataPropType } from '../../../../../propTypes';
import defaultImg from '../../../../../assets/no_image.jpeg';

import { styles } from './styles';

class Book extends Component {
  handleBookClick = () => {
    const { data, navigation } = this.props;
    navigation.navigate('bookDetail', data);
  };

  render() {
    const {
      data: { title, author, image_url: imageUrl }
    } = this.props;
    return (
      <TouchableOpacity style={styles.bookContainer} onPress={this.handleBookClick}>
        <Image style={styles.bookImage} source={imageUrl ? { uri: imageUrl } : defaultImg} />
        <View>
          <Text style={styles.bookTitle}>{title}</Text>
          <Text style={styles.bookAuthor}>{author}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Book.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
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
