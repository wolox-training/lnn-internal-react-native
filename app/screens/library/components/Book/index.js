import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

function Book({ title, author, img }) {
  return (
    <View style={styles.container} >      
      <Image
        style={styles.image}
        source={img}
      />
      <View>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.subTitle}>
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
  title: '',
  author: '',
  imageUrl: ''
};

export default Book;
