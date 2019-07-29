import React, { Component } from 'react';
import { Text } from 'react-native';

import { DATA } from '../../../constants/index';

import Library from './layout';
import Book from './components/Book';

class LibraryContainer extends Component {
  handleBookClick = () => {
    this.props.navigation.navigate('bookDetail')
  }


  renderBook = ({ item: { title, author, image_url: imageUrl } }) => <Book data={{ title, author, imageUrl }} handleBookClick={this.handleBookClick} />;

  keyExtractor = item => item.id.toString();

  render() {
    return <Library data={DATA} renderBook={this.renderBook} keyExtractor={this.keyExtractor} />;
  }
}

export default LibraryContainer;
