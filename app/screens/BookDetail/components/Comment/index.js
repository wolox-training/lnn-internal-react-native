import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';

import imagen from '../../../../../assets/img_user1.png';

import { styles } from './styles';

function Comment({ data: { user_name: userName, comment, imageUrl } }) {
  return (
    <View style={styles.container}>
      <Image style={styles.commentImage} source={imageUrl ? { uri: imageUrl } : imagen} />
      <View style={styles.textContainer}>
        <Text style={styles.commentUser}>{userName}</Text>
        <Text style={styles.commentText}>{comment}</Text>
      </View>
    </View>
  );
}

Comment.propTypes = {
  data: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    // eslint-disable-next-line camelcase
    user_name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string
  })
};

export default Comment;
