import { StyleSheet } from 'react-native';
import { white } from '@scss/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 35,
    marginTop: 40,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: white,
    borderRadius: 20
  },
  backgroundImage: {
    marginTop: -20,
    width: '100%',
    height: 110
  },
  iconLeft: {
    height: 15,
    width: 15,
    marginLeft: 10
  },
  iconRight: {
    height: 15,
    width: 15,
    marginRight: 10
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10
  }
});
