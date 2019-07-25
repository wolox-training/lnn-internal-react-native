import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginHorizontal: 20,
    marginVertical: 10
  },
  image: {
    height: 60,
    marginRight: 10
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4d4d4d'
  },
  subTitle: {
    fontSize: 20,
    color: '#999999'
  }
});
