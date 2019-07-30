import React, { Component } from 'react';
import { Text } from 'react-native';

import { DATA } from '../../../constants/index';

import Library from './layout';
import Book from './components/Book';

class LibraryContainer extends Component {
  static navigationOptions = {
    header: null
  }

  handleBookClick = data => {
    this.props.navigation.navigate('bookDetail', data)
  }

  renderBook = ({ item }) => <Book data={item} handleBookClick={this.handleBookClick} />;

  keyExtractor = item => item.id.toString();

  render() {
    return <Library data={DATA} renderBook={this.renderBook} keyExtractor={this.keyExtractor} />;
  }
}

export default LibraryContainer;
