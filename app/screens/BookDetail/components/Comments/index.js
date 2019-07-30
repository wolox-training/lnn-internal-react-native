import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';

import imagen from '../../../../../assets/no_image.jpeg';

import { styles as screenStyles } from '../../styles';

import { styles } from './styles';

function Comments({ user, comment, imageUrl }) {
  return (
    <View style={screenStyles.componentsContainer}>
      <View style={styles.container}>
        <Image style={styles.commentImage} source={imageUrl ? { uri: imageUrl } : imagen} />
        <View style={styles.textContainer}>
          <Text style={styles.commentUser}>{user}</Text>
          <Text>{comment}</Text>
        </View>
      </View>
    </View>
  );
}

Comments.propTypes = {
  comment: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  imageUrl: PropTypes.string
};

export default Comments;
