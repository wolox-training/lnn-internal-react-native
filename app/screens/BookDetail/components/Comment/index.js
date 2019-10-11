import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';
// provisory
import imgTest1 from '@assets/img_user1.png';
import imgTest2 from '@assets/img_user2.png';
import { commentDataPropTypes } from '@propTypes/CommentDataPropTypes';

import { styles } from './styles';

// provisory
const imgTest = [imgTest1, imgTest2];

function Comment({ data: { id, user_name: userName, comment, image_url: imageUrl } }) {
  // provisory
  const index = id - 1;
  return (
    <View style={styles.container}>
      <Image style={styles.commentImage} source={imageUrl ? { uri: imageUrl } : imgTest[index]} />
      <View style={styles.textContainer}>
        <Text style={styles.commentUser}>{userName}</Text>
        <Text style={styles.commentText}>{comment}</Text>
      </View>
    </View>
  );
}

Comment.propTypes = {
  data: PropTypes.shape(commentDataPropTypes).isRequired
};

export default Comment;
