import React, { Component } from 'react';
import { Text } from 'react-native';

import Library from './layout';
import Book from './components/Book';

import { DATA } from '../../../constants/index';

class LibraryContainer extends Component {
  renderBook = ({ item }) => (
    <Book
      title={item.title}
      author={item.author}
      imageUrl={item.image_url}
    />
  );

  keyExtractor = item => item.id.toString();

  render() {
    return (
      <Library
        data={DATA}
        renderBook={this.renderBook}
        keyExtractor={this.keyExtractor}
      />
    )
  }
};

export default LibraryContainer;
