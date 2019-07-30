import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row'
  },
  commentImage: {
    height: 50,
    width: 50,
    borderRadius: 50
  },
  textContainer: {
    flex: 2,
    marginLeft: 20
  },
  commentUser: {
    fontWeight: 'bold'
  },
  commentText: {
    fontSize: 10
  }
});
